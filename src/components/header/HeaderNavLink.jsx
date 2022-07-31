import { Link } from 'react-router-dom';
import Overlay from '../overlay/Overlay';
function HeaderNavLink({ mobile, setMobile }) {
  return (
    <>
      {mobile && (
        <Overlay onClick={() => setMobile(false)}>
          <ul className="nav-link-list" onClick={() => setMobile(false)}>
            <Link to="/movies" className="nav-link-item active">
              Movie
            </Link>
            <Link to="/tvshows" className="nav-link-item">
              TV Shows
            </Link>
            <Link to="/series" className="nav-link-item">
              Series
            </Link>
            <Link to="/contact" className="nav-link-item">
              Contact
            </Link>
          </ul>
        </Overlay>
      )}
      {!mobile && (
        <ul className="flexBx" onClick={() => setMobile(false)}>
          <Link to="/movies" className="nav-link-item active">
            Movie
          </Link>
          <Link to="/tvshows" className="nav-link-item">
            TV Shows
          </Link>
          <Link to="/series" className="nav-link-item">
            Series
          </Link>
          <Link to="/contact" className="nav-link-item">
            Contact
          </Link>
        </ul>
      )}
    </>
  );
}
export default HeaderNavLink;
