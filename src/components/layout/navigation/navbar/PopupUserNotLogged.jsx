import { Link } from 'react-router-dom';
import PopupItem from '../../headerPopUp/PopupItem';

function PopupUserNotLogged() {
  return (
    <>
      <PopupItem className="popup__user-item user-item__sign-in">
        <Link to="auth/sign-in" className="sign__link">
          Sign in
        </Link>
      </PopupItem>
      <PopupItem className="popup__user-item user-item__sign-up">
        <Link to="auth/sign-up" className="sign__link">
          Sign up
        </Link>
      </PopupItem>
    </>
  );
}
export default PopupUserNotLogged;
