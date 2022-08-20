import HeaderPopup from '../../headerPopUp/HeaderPopup';
import PopupItem from '../../headerPopUp/PopupItem';

function NavUser() {
  return (
    <div className="nav__user">
      {/* <i className="fa-solid fa-user nav__icon"></i> */}
      <img
        src="https://lh3.googleusercontent.com/ogw/AOh-ky1AQjKplE11WsHjDkVdV_wxr5cjEkJFEKjKOEHt0w=s32-c-mo"
        alt=""
        className="nav__user-img"
      />
      <HeaderPopup className="popup__user-list">
        <PopupItem className="popup__user-item user-item__avatar">
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
        </PopupItem>
      </HeaderPopup>
    </div>
  );
}
export default NavUser;
