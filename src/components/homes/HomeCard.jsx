import { useNavigate } from 'react-router-dom';
import Button from './../button/Button';

function HomeCard(props) {
  const navigate = useNavigate();
  const {
    item: {
      id,
      // poster_path,
      title,
      backdrop_path,
      vote_average,
      release_date,
      overview,
    },
  } = props;

  const redirectHandler = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <>
      <div className="box">
        <div className="cover-image">
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt=""
          />
        </div>
        <div className="content flex container">
          <div className="details row flex">
            <h1> {title}</h1>
            <div className="rating flex">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
              <label htmlFor="">{vote_average.toFixed(1)} / 10 votes</label>
            </div>
            <p>{overview}</p>
            <label htmlFor="" className="release-date">
              {release_date}
            </label>
          </div>
          <div className="button-manipulate-container">
            {/*  */}
            <Button className="btn--primary" onClick={redirectHandler}>
              PLAY NOW
            </Button>
            <div className="wishlist-icon-container">
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeCard;
