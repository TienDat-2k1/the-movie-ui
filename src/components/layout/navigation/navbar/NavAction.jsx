import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchStart, setSearchKey } from '../../../../store/movie/movieSlice';
import SearchInput from '../../forms/SearchInput/SearchInput';
import HeaderPopup from '../../headerPopUp/HeaderPopup';
import SearchPopup from '../../SearchPopup/SearchPopup';
import PopupHistoryItem from './PopupHistoryItem';

function NavAction({ className }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const [isNotSearchActive, setIsNotSearchActive] = useState(true);
  const searchRef = useRef(null);

  // useEffect(() => {
  //   if (isSearchActive) {
  //     searchRef.current.focus();
  //   }
  // }, [isSearchActive]);

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
          type="text"
          ref={searchRef}
          placeholder="Enter search"
          onChange={searchChangeHandler}
          value={searchInput}
          onKeyDown={keydownHandler}
          onBlur={blurHandler}
        />
        <i
          className="fa-solid fa-magnifying-glass nav__icon search__icon"
          onClick={searchHandler}
        ></i>
        {/* <SearchPopup /> */}
      </div>
      <div className="nav__action">
        <i className="fa-solid fa-clock-rotate-left nav__icon"></i>
        <HeaderPopup className="popup__history ">
          <div className="popup__history-list">
            <PopupHistoryItem />
            <PopupHistoryItem />
            <PopupHistoryItem />
            <PopupHistoryItem />
            <PopupHistoryItem />
            <PopupHistoryItem />
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
