import css from './friends.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

const FriendList = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map(({ id, ...props }) => (
      <FriendListItem key={id} {...props} />
    ))}
  </ul>
);

export default FriendList;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };