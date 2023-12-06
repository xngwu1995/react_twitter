import { message } from 'antd';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const domain = 'http://rookie-social-tale-dev.us-east-1.elasticbeanstalk.com';

export const axiosInstance = axios.create({
  baseURL: domain,
  timeout: 500000,
  headers: {
    'Content-Type': 'multipart/form-data',
    'X-CSRFToken': cookies.get('csrftoken'),
  },
});

// added the domain url
axiosInstance.interceptors.request.use((config) => {
  const token = `JWT ${localStorage.getItem('access')}`;
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = token;
  }
  return config;
});

// Intercept the response data, 1. handle data, 2. handle error
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { data } = error.response;
      message.error(`Error: ${data.message}`);
    } else if (error.request) {
      // The request was made but no response was received
      message.error('Error: No response received from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      message.error(`Error: ${error.message}`);
    }
    return Promise.reject(error);
  },
);

// get resource
export const get = (url) => axiosInstance.get(url);

// add a new resource
export const post = (url, params) => axiosInstance.post(url, params);

// update a resource
export const put = (url, params) => axiosInstance.put(url, params);

// delete a resource
export const del = (url, params) => axiosInstance.del(url, params);
