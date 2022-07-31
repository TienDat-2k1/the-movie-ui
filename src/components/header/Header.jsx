import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/Act_of_valor.svg';
import UserIcon from '../user-icon/UserIcon';
import UserPopUpSelection from '../user-popup-selection/UserPopUpSelection';
import ViewHistoryPopup from '../view-history-popup/ViewHistoryPopup';
import './Header.scss';

function Header() {
  const [mobile, setMobile] = useState(false);
  return (
    <header>
      <div className="container height flexB">
        <nav className="header-container">
          <Link to="/" className="logo-container">
            <Logo className="logo" />
          </Link>
          <ul
            className={mobile ? 'nav-link-list' : 'flexBx'}
            onClick={() => setMobile(false)}
          >
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
          <button className="toggle" onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <i className="fa-solid fa-times"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </nav>
        <div className="account">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-clock-rotate-left"></i>
          <i className="fa-solid fa-bell"></i>
          {/* <i className="fa-solid fa-user"></i> */}
          <UserIcon urlImage="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2578170.jpg" />
          {/* {
            <ViewHistoryPopup>
              <li className="view-history-popup-item">
                <div className="popup-item-container">
                  <img
                    src="https://thuvienanime.com/wp-content/uploads/2021/09/kinh-lich-nhan-sinh-cua-bach-tieu-thuan.jpeg"
                    alt=""
                  />
                  <span className="popup-item-duration">3:03</span>
                </div>
                <div className="view-history-popup-item-content">
                  <div className="title">Nhất niệm vĩnh hằng</div>
                  <span>Creator</span>
                  <span>Time watch</span>
                </div>
              </li>
              <li className="view-history-popup-item">
                <div className="popup-item-container">
                  <img
                    src="https://thuvienanime.com/wp-content/uploads/2021/09/kinh-lich-nhan-sinh-cua-bach-tieu-thuan.jpeg"
                    alt=""
                  />
                  <span className="popup-item-duration">3:03</span>
                </div>
                <div className="view-history-popup-item-content">
                  <div className="title">
                    Nhất niệm vĩnh hằngNhất niệm vĩnh hằng
                  </div>
                  <span>Creator</span>
                  <span>Time watch</span>
                </div>
              </li>
            </ViewHistoryPopup>
          } */}
          {/* <UserPopUpSelection>
            <div className="user-item">
              <img
                src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2578170.jpg"
                alt=""
              />
              <span>DisplayName</span>
            </div>

            <li className="user-item">Chỉnh sửa thông tin nè</li>
            <li className="user-item">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <span>Logout</span>
            </li>
          </UserPopUpSelection> */}
        </div>
      </div>
    </header>
  );
}
export default Header;
