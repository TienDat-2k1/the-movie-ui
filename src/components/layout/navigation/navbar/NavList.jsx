import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  isLoggedSelector,
  userSelector,
} from '../../../../store/user/userSelector';
import { signOut } from '../../../../store/user/userSlice';

function NavList({ isNavMobile, setIsNavMobile }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector(isLoggedSelector);
  const user = useSelector(userSelector);

  return (
    <div className={`nav__list ${isNavMobile ? 'nav__list--active' : ''}`}>
      {/* nav__list--active */}
      <div className="nav__item nav__item--account">
        <div className="account__img">
          <img
            src={
              user.photoUrl
                ? user.photoUrl
                : 'https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png'
            }
            alt="avatar"
          />
        </div>
        <div className="account__info">
          {!isLogged && (
            <h4
              className="heading-4 heading-4--light heading-4--weight"
              onClick={() => navigate('auth/sign-in')}
            >
              Đăng Nhập
            </h4>
          )}
          {isLogged && (
            <>
              <h4 className="heading-4 heading-4--light heading-4--weight">
                {user.displayName}
              </h4>
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                onClick={() => dispatch(signOut())}
              ></i>
            </>
          )}
        </div>
      </div>
      {/* Nav Item */}
      <div className="nav__item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav__link nav__link--active' : 'nav__link'
          }
        >
          Home
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink
          to="/movie"
          className={({ isActive }) =>
            isActive ? 'nav__link nav__link--active' : 'nav__link'
          }
        >
          Movie
        </NavLink>
      </div>
      <div className="nav__item">
        <a className="nav__link" href="#">
          TvShow
        </a>
      </div>
      <div className="nav__item">
        <a href="#" className="nav__link">
          Series
        </a>
      </div>
      <div className="nav__item">
        <a href="#" className="nav__link">
          Contact
        </a>
      </div>
      <button
        className="nav__close"
        onClick={() => {
          setIsNavMobile(false);
        }}
      >
        &times;
      </button>
    </div>
  );
}
export default NavList;
