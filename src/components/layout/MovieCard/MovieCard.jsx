import { useNavigate } from 'react-router-dom';

import './MovieCard.scss';

import imageUrl from '../../../api/imageUrl';

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { poster_path, id, title, vote_average, release_date } = movie;

  const redirectHandler = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className="movie__item">
      <div className="movie__poster">
        <img className="movie__img" src={imageUrl(poster_path)} alt="" />
      </div>
      <div className="movie__rates">
        <i className="fa-solid fa-star movie__icon"></i>
        <span className="movie__avg-vote">{vote_average.toFixed(1)}</span>
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
        <div className="movie__wishlist">
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
