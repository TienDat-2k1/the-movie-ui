import { Link } from 'react-router-dom';

function NavList({ isNavMobile, setIsNavMobile }) {
  return (
    <div className={`nav__list ${isNavMobile ? 'nav__list--active' : ''}`}>
      {/* nav__list--active */}
      <div className="nav__item">
        <Link to="/movie" href="#" className="nav__link nav__link--active">
          Movie
        </Link>
      </div>
      <div className="nav__item">
        <Link to="/tvshow" href="#" className="nav__link">
          TvShow
        </Link>
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
