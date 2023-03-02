import { CloseOutlined } from '@ant-design/icons';
import { PropTypes } from 'prop-types';
import logo from '../../assets/twitter-log.svg';
import style from './index.module.css';

const Header = ({
  onClickClose,
}) => (
  <div className={style.header}>
    {onClickClose && <CloseOutlined className={style.closeIcon} onClick={onClickClose} />}
    <img src={logo} alt="twitter-log" className={style.twitterLog} />
  </div>
);

Header.propTypes = {
  onClickClose: PropTypes.func,
};

Header.defaultProps = {
  onClickClose: null,
};

export default Header;
