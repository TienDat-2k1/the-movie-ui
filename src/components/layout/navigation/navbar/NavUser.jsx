import { useSelector } from 'react-redux';
import {
  isLoggedSelector,
  userSelector,
} from '../../../../store/user/userSelector';
import HeaderPopup from '../../headerPopUp/HeaderPopup';
import PopupItem from '../../headerPopUp/PopupItem';
import PopupUserLogged from './PopupUserLogged';
import PopupUserNotLogged from './PopupUserNotLogged';

function NavUser() {
  const isLogged = useSelector(isLoggedSelector);

  const user = useSelector(userSelector);

  return (
    <div className="nav__user">
      {/* <i className="fa-solid fa-user nav__icon"></i> */}
      <img
        src={
          user.photoUrl
            ? user.photoUrl
            : 'https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png'
        }
        alt=""
        className="nav__user-img"
      />

      <HeaderPopup className="popup__user-list">
        {isLogged && <PopupUserLogged />}
        {!isLogged && <PopupUserNotLogged />}
      </HeaderPopup>
    </div>
  );
}
export default NavUser;
