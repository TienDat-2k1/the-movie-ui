import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import './MovieCart.scss';
function MovieCard(props) {
  const navigate = useNavigate();
  const {
    movie: { id, poster_path, title, vote_average, release_date },
    isFullDate,
  } = props;

  const redirectHandler = () => navigate(`/movies/${id}`);

  return (
    <div className="movie-card-container">
      <div className="movie-card--image">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
      </div>
      <div className="movie-card--rate">
        <i className="fa-solid fa-star"></i>
        <span>{vote_average.toFixed(1)}</span>
      </div>
      <div className="movie-card--title" onClick={redirectHandler}>
        <p>{title}</p>
      </div>
      <div className="movie-card-production">
        <span>{isFullDate ? release_date : release_date.slice(0, 4)}</span>
      </div>
      <div className="movie-card--manipulate__button">
        <Button className="btn--primary" onClick={redirectHandler}>
          Watch now
        </Button>
        {/* <button>Watch now</button> */}
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
}
export default MovieCard;
