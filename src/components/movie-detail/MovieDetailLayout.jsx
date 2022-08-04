import './MovieDetailLayout.scss';
import imageUrl from './../../api/imageUrl';
import Button from './../button/Button';
import Casts from './Casts';

function MovieDetailLayout(props) {
  const {
    movie: { id, title, overview, poster_path, genres, release_date },
  } = props;
  return (
    <div className="movie-detail-layout">
      <div className="movie-detail-items-layout">
        <div className="movie-detail-item">
          <div className="movie-detail-poster">
            <img src={imageUrl(poster_path)} alt={title} />
          </div>
        </div>
        <div className="movie-detail-item">
          <div className="movie-detail-title">
            <h2>{title}</h2>
          </div>
          <div className="movie-detail-genres">
            {genres.map(gen => (
              <Button key={gen.id} className="btn--transparent">
                {gen.name.toUpperCase()}
              </Button>
            ))}
          </div>
          <div className="movie-detail-manipulation">
            <div className="movie-manipulate-watch">
              <Button className="btn--primary">Watch</Button>
            </div>
            <div className="movie-manipulate-option">
              <div className="manipulate-option--icon manipulate-wishlist">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="manipulate-option--icon">
                <i className="fa-solid fa-share-nodes"></i>
              </div>
              <div className="manipulate-option--icon">
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-detail-items-layout">
        <div className="movie-detail-item">
          <div className="movie-detail-release_date">
            <div>{release_date}</div>
          </div>
        </div>
        <div className="movie-detail-item">
          <h2>STORYLINE</h2>
          <div className="movie-detail-storyline">
            <p>{overview}</p>
          </div>
        </div>
        <div className="movie-detail-item">
          <h2>CAST</h2>
          <div className="cast-container">
            <Casts idMovie={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetailLayout;
