import Bar from '@components/Bar';
import { OBJECT_KEYS } from '@components/Bar/constants';
// import { OBJECT_KEYS } from '@components/Bar/constants';
import { timeDiff } from '@utils/index';
import PropTypes from 'prop-types';

import style from './index.module.scss';

/**
* 评论 card
*/
const CommentCard = ({
  data,
}) => (
  <div className={style.container}>
    <img className={style.avatar} src={data.user.avatar} alt="" />
    <div className={style.rightPart}>
      <div>
        <span className={style.nickname}>
          {data.user.nickname}
        </span>
        <span className={style.username}>
          @
          {data.user.username}
          &nbsp;·&nbsp;
          {timeDiff(data.created_at)}
        </span>
      </div>
      <div className={style.content}>
        {data.content}
      </div>
      <Bar
        onlyStar
        likesCount={data.likes_count}
        hasLiked={data.has_liked}
        type={OBJECT_KEYS.COMMENT}
        id={data.id}
      />
    </div>
  </div>
);

CommentCard.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string,
      nickname: PropTypes.string,
      avatar: PropTypes.string,
    }),
    id: PropTypes.number,
    content: PropTypes.string, // 该评论的文本内容
    created_at: PropTypes.string, // 该评论的发布时间
    likes_count: PropTypes.number, // 该评论的点赞数
    has_liked: PropTypes.bool,
  }).isRequired,
};

export default CommentCard;
