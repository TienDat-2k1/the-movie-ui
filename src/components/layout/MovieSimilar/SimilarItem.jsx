import { useNavigate } from 'react-router-dom';
import imageUrl from '../../../api/imageUrl';

function SimilarItem({ similar }) {
  const navigate = useNavigate();
  const { poster_path, title, release_date, vote_average, id } = similar;

  const redirectSimilarMovieDetail = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <li className="similar__item">
      <div className="similar__poster" onClick={redirectSimilarMovieDetail}>
        <img src={imageUrl(poster_path)} alt={title} className="similar__img" />
      </div>
      <div className="similar__content">
        <h4
          className="heading-4 heading-4--weight heading-4--light similar__title"
          onClick={redirectSimilarMovieDetail}
        >
          {title}
        </h4>
        <div className="similar__description">
          <div
            className={`similar__vote avg-box avg-box--${Math.round(
              vote_average
            )}`}
          >
            <span>{vote_average.toFixed(1)}</span>
          </div>
          <div className="similar__description--right">
            <span className="similar__release">{release_date}</span>
            <span className="similar__time">1h 22min</span>
          </div>
        </div>
      </div>
    </li>
  );
}
export default SimilarItem;
