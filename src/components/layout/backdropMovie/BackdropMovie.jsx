import { useNavigate } from 'react-router-dom';
import './BackdropMovie.scss';
import imageUrl from '../../../api/imageUrl';
import Button from '../forms/Button/Button';

function BackdropMovie({ detailMovie }) {
  const navigate = useNavigate();
  const { backdrop_path, title, vote_average, vote_count } = detailMovie;

  const redirectBackHandler = () => {
    navigate(-1);
  };

  return (
    <section className="movie__backdrop mb-medium">
      <img src={imageUrl(backdrop_path)} alt="" className="backdrop__img" />
      <div className="backdrop__content container">
        <span className="backdrop__back" onClick={redirectBackHandler}>
          &lt; {title}
        </span>
        <div className="backdrop__rates">
          <div
            className={`backdrop__avg avg-box avg-box--${Math.round(
              vote_average
            )}`}
          >
            <span>{vote_average.toFixed(1)}</span>
          </div>
          <div className="backdrop__votes">
            <span className="backdrop__vote">
              {vote_count / 1000 > 1
                ? `${(vote_count / 1000).toFixed(1)}k`
                : ``}{' '}
              votes
            </span>
            <p className="backdrop__description">
              Our User are recommending it
            </p>
          </div>
        </div>
        <a href="#trailer">
          <Button className="btn--transparent backdrop__btn">
            <i className="fa-solid fa-play backdrop__icon"></i>
            <span>Trailer</span>
          </Button>
        </a>
      </div>
    </section>
  );
}
export default BackdropMovie;
