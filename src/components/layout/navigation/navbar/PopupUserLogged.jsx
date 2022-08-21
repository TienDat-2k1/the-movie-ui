import { useSelector } from 'react-redux';
import { userSelector } from '../../../../store/user/userSelector';
import PopupItem from '../../headerPopUp/PopupItem';

function PopupUserLogged() {
  const user = useSelector(userSelector);
  if (!Object.entries(user).length) return;
  return (
    <>
      <PopupItem className="popup__user-item user-item__avatar">
        <div className="user-item__avatar-box">
          <img
            src={
              user.photoUrl
                ? user.photoUrl
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png'
            }
            alt="avatar"
            className="user-item__image"
          />
          <h4 className="heading-4 heading-4--dark heading-4--weight user-item__name">
            {user.displayName}
          </h4>
        </div>
      </PopupItem>
      <PopupItem className="popup__user-item">
        <div className="user-item__information">
          <span>Thông tin chi tiết</span>
        </div>
      </PopupItem>
      <PopupItem className="popup__user-item">
        <div className="user-item__logout">
          <i className="fa-solid fa-arrow-right-from-bracket user-item__icon"></i>
          <span>Logout</span>
        </div>
      </PopupItem>
    </>
  );
}
export default PopupUserLogged;
