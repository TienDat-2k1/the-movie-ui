import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.scss';
import logo from '../../../../assets/img/logo.png';
import NavList from './NavList';
import NavAction from './NavAction';
import NavUser from './NavUser';

function NavBar() {
  const navigate = useNavigate();
  const [isNavMobile, setIsNavMobile] = useState(false);
  const redirectHomeHandler = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="container nav">
        <div className="navbar__logo-box" onClick={redirectHomeHandler}>
          <img src={logo} alt="logo" className="navbar__logo" />
          <h1 className="heading-1 navbar__title">TheACT</h1>
        </div>
        {/* /nav list */}
        <NavList isNavMobile={isNavMobile} setIsNavMobile={setIsNavMobile} />

        {/* Nav action */}
        <NavAction isNavMobile={isNavMobile} setIsNavMobile={setIsNavMobile} />
        {/* nav toggle */}
        <div
          className="nav__toggle"
          onClick={() => {
            setIsNavMobile(true);
          }}
        >
          <i className="fa-solid fa-bars nav__icon"></i>
        </div>
        {/* Overlay nav  */}
        <div
          className={`nav__overlay ${
            isNavMobile ? 'nav__overlay--active' : ''
          }`}
          onClick={() => {
            setIsNavMobile(!isNavMobile);
          }}
        ></div>

        {/* nav user */}
        <NavUser />
      </div>
    </nav>
  );
}
export default NavBar;
