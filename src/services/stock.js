import { get, post, put } from "../utils/request";

export const getStrategyStocks = () =>
  get("/api/stocks/strategy/get-all-strategy-stocks/");

export const createTradeRecord = params =>
  post("/api/stocks/record/create-trade-record/", params);

export const getAllTradeRecord = () =>
  get("/api/stocks/record/get-all-trade-record/");

export const getAllStocks = () => get("/api/stocks/get-stocks/");

export const updateTradeRecord = (id, params) =>
  put(`/api/stocks/record/${id}/update-trade-record/`, params);
