import { Link, NavLink } from 'react-router-dom';

function NavList({ isNavMobile, setIsNavMobile }) {
  return (
    <div className={`nav__list ${isNavMobile ? 'nav__list--active' : ''}`}>
      {/* nav__list--active */}
      <div className="nav__item">
        <NavLink
          to="/movie"
          href="#"
          className={({ isActive }) =>
            isActive ? 'nav__link nav__link--active' : 'nav__link'
          }
        >
          Movie
        </NavLink>
      </div>
      <div className="nav__item">
        <NavLink
          to="/tvshow"
          href="#"
          className={({ isActive }) =>
            isActive ? 'nav__link nav__link--active' : 'nav__link'
          }
        >
          TvShow
        </NavLink>
      </div>
      <div className="nav__item">
        <Link to="/series" href="#" className="nav__link">
          Series
        </Link>
      </div>
      <div className="nav__item">
        <Link to="/contact" href="#" className="nav__link">
          Contact
        </Link>
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
