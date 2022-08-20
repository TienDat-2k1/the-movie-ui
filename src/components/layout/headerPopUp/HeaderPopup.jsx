import './HeaderPopup.scss';
import PopupItem from './PopupItem';

function HeaderPopup({ className, children, ...otherProps }) {
  return <div className={`header-popup ${className}`}>{children}</div>;
}
export default HeaderPopup;

// ? popup__user-list (ClassName)
{
  //* User LOGIN
  /* <PopupItem className="popup__user-item user-item__avatar">
        <div className="user-item__avatar-box">
          <img
            src="https://lh3.googleusercontent.com/ogw/AOh-ky1AQjKplE11WsHjDkVdV_wxr5cjEkJFEKjKOEHt0w=s32-c-mo"
            alt="avatar"
            className="user-item__image"
          />
          <h4 className="heading-4 heading-4--dark heading-4--weight user-item__name">
            Tô Nguyễn Tiến Đạt
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
      </PopupItem> */
}

//*USER SIGNIN SIGNUP
{
  /* <PopupItem className="popup__user-item user-item__sign-in">
        <h4 className="heading-4 heading-4--dark heading-4--weight user-item__name">
          Sign in
        </h4>
      </PopupItem>
      <PopupItem className="popup__user-item user-item__sign-up">
        <h4 className="heading-4 heading-4--dark heading-4--weight user-item__name">
          Sign up
        </h4>
      </PopupItem> */
}
