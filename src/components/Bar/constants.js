import cycleSvg from '@assets/cycle.svg';
import starSvg from '@assets/star.svg';
import upSvg from '@assets/up.svg';
import msgSvg from '@assets/msg.svg';
import likeRedSvg from '@assets/likeRed.svg';
import style from './index.module.scss';

export const BAR_KEYS = {
  STAR: 'star',
  MSG: 'msg',
  CYCLE: 'cycle',
  UP: 'UP',
};

export const getBars = ({
  commentsCount,
  likesCount,
  nav,
  id,
  onlyStar,
  liked,
}) => {
  if (onlyStar) {
    return [{
      key: BAR_KEYS.STAR,
      icon: (
        <div>
          {liked ? <img className={style.icon} src={likeRedSvg} alt="" />
            : <img className={style.icon} src={starSvg} alt="" />}
          {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
        </div>),

    }];
  }
  return [
    {
      key: BAR_KEYS.MSG,
      icon: (
        <div onClick={() => nav(`/comments/${id}`)}>
          <img className={style.icon} src={msgSvg} alt="" />
          {commentsCount > 0 && <span className={style.count}>{commentsCount}</span>}
        </div>),
    },
    {
      key: BAR_KEYS.CYCLE,
      icon: <img className={style.icon} src={cycleSvg} alt="" />,
    },
    {
      key: BAR_KEYS.STAR,
      icon: (
        <div>
          {liked ? <img className={style.icon} src={likeRedSvg} alt="" />
            : <img className={style.icon} src={starSvg} alt="" />}
          {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
        </div>),
    },
    {
      key: BAR_KEYS.UP,
      icon: <img className={style.icon} src={upSvg} alt="" />,
    },
  ];
};

export const OBJECT_KEYS = {
  TWEET: 'tweet',
  COMMENT: 'comment',
};
