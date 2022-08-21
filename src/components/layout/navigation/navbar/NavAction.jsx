import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchStart, setSearchKey } from '../../../../store/movie/movieSlice';
import SearchInput from '../../forms/SearchInput/SearchInput';
import HeaderPopup from '../../headerPopUp/HeaderPopup';
import SearchPopup from '../../SearchPopup/SearchPopup';
import PopupHistoryItem from './PopupHistoryItem';
import { wishlistSelector } from '../../../../store/user/userSelector';

function NavAction({ className }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [searchInput, setSearchInput] = useState('');
  const [isNotSearchActive, setIsNotSearchActive] = useState(true);

  const wishlist = useSelector(wishlistSelector);

  useEffect(() => {
    if (isNotSearchActive) return;
    if (searchInput) return;
    const removeActive = setTimeout(() => {
      setIsNotSearchActive(true);
    }, 5000);
    return () => {
      clearTimeout(removeActive);
    };
  }, [isNotSearchActive, searchInput]);

  const searchChangeHandler = e => {
    setSearchInput(e.target.value);
  };

  const keydownHandler = e => {
    if (e.code === 'Enter') {
      setSearchInput('');
      setIsNotSearchActive(false);
      dispatch(setSearchKey(searchInput));
      navigate('/search-results');
    }
  };

  const blurHandler = () => {
    setIsNotSearchActive(true);
  };

  const searchHandler = () => {
    if (isNotSearchActive) {
      setIsNotSearchActive(false);
      return;
    }

    if (!searchInput) {
      setIsNotSearchActive(true);
      return;
    }

    setSearchInput('');
    setIsNotSearchActive(true);
    dispatch(setSearchKey(searchInput));
    navigate('/search-results');
  };

  return (
    <div className={`nav__actions ${className}`}>
      <div
        className={`nav__action nav__action--search ${
          !isNotSearchActive ? 'search--active' : ''
        }`}
      >
        <SearchInput
          id="search"
          type="text"
          ref={searchRef}
          placeholder="Enter search"
          onChange={searchChangeHandler}
          value={searchInput}
          onKeyDown={keydownHandler}
        />
        <label htmlFor="search" onClick={searchHandler}>
          <i className="fa-solid fa-magnifying-glass nav__icon search__icon"></i>
        </label>

        {/* <SearchPopup /> */}
      </div>
      <div className="nav__action">
        {/* history original :)) use temp wishlist :) */}
        {/* history icon */}
        {/* <i className="fa-solid fa-clock-rotate-left nav__icon"></i> */}
        <i className="fa-solid fa-heart nav__icon"></i>
        <HeaderPopup className="popup__history ">
          <div className="popup__history-list">
            {!wishlist.length && (
              <h4
                className="heading-4 heading-4--dark heading4--weight mt-medium mb-medium"
                style={{
                  width: '36rem',
                  transform: 'translateY(10rem)',
                }}
              >
                Please login and add wishlist to me
              </h4>
            )}

            {wishlist &&
              wishlist.map(item => (
                <PopupHistoryItem key={item} itemId={item} />
              ))}

            {/* <PopupHistoryItem />
            <PopupHistoryItem />
            <PopupHistoryItem />
            <PopupHistoryItem />
            <PopupHistoryItem />
            <PopupHistoryItem /> */}
          </div>
          <div className="history__viewall">
            <a href="#">View all</a>
          </div>
        </HeaderPopup>
      </div>
      <div className="nav__action">
        <i className="fa-solid fa-bell nav__icon"></i>
      </div>
    </div>
  );
}
export default NavAction;
