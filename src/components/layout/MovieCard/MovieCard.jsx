import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './MovieCard.scss';

import imageUrl from '../../../api/imageUrl';
import {
  isLoggedSelector,
  wishlistSelector,
} from '../../../store/user/userSelector';
import { setWishlist } from '../../../store/user/userSlice';

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { poster_path, id, title, vote_average, release_date } = movie;

  const isLogged = useSelector(isLoggedSelector);
  const wishlist = useSelector(wishlistSelector);

  const wishlistActive = wishlist.includes(id);

  const redirectHandler = () => {
    navigate(`/movie/${id}`);
  };

  const wishlistHandler = () => {
    if (!isLogged) {
      alert(' you must login before add to wishlist');
      navigate('/auth/sign-in');
    }
    if (isLogged) {
      dispatch(setWishlist(id));
    }
  };

  return (
    <div className="movie__item">
      <div className="movie__poster">
        <img className="movie__img" src={imageUrl(poster_path)} alt="" />
      </div>
      <div className="movie__rates">
        <i className="fa-solid fa-star movie__icon"></i>
        <span className="movie__avg-vote">
          {vote_average && vote_average.toFixed(1)}
        </span>
      </div>
      <h3 className="heading-3 movie__title">{title}</h3>
      <div className="movie__release">{release_date}</div>
      <div className="movie__actions">
        <button
          className="btn btn--primary movie__btn"
          onClick={redirectHandler}
        >
          Watch
        </button>
        <div
          className={`movie__wishlist ${
            wishlistActive ? 'movie__wishlist--active' : ''
          }`}
        >
          <i className="fa-solid fa-heart" onClick={wishlistHandler}></i>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
