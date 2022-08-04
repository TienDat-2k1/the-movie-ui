import imageUrl from '../../api/imageUrl';
import Button from '../button/Button';
import './ImageLayoutBackdrop.scss';
import { useNavigate } from 'react-router-dom';

function ImageLayoutBackdrop(props) {
  const navigate = useNavigate();
  const {
    movie: { backdrop_path, title, vote_average, vote_count },
  } = props;

  const prevPageHandler = () => navigate(-1);
  return (
    <div className="overview--backdrop ">
      <div className="overview--backdrop-img">
        <img src={imageUrl(backdrop_path)} alt={title} />
      </div>
      <div className="overview--backdrop--layout">
        <div className="overview--backdrop-head container">
          <div className="backdrop-head-container">
            <div className="layout-head--left" onClick={prevPageHandler}>
              <i className="fa-solid fa-angle-left"></i>
              <h3>{title}</h3>
            </div>
            <div className="layout-head--right">
              <div className="btn--type-movie-action">
                <Button className="btn--half-light">Movie</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="overview--backdrop-foot">
          <div className="backdrop-foot-container container">
            <div className="backdrop-foot--item">
              <div className="backdrop-foot--vote_avg">
                <i className="fa-solid fa-star"></i>
                <span>{vote_average.toFixed(1)}</span>
              </div>
              <div className="backdrop-foot--vote">
                <h2>
                  {vote_count / 1000 < 1
                    ? `${vote_count} `
                    : `${(vote_count / 1000).toFixed(1)}K `}
                  VOTE
                </h2>
                <p>Our User Are Recommending It</p>
              </div>
            </div>
            <div className="backdrop-foot--item">
              <Button className="btn--transparent">
                <i className="fa-solid fa-play"></i>
                <span>TRAILER</span>
              </Button>
            </div>
            <div className="backdrop-foot--item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImageLayoutBackdrop;
