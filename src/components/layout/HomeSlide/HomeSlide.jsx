import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './HomeSlide.scss';
import imageUrl from '../../../api/imageUrl';
import Button from '../forms/Button/Button';
import {
  isLoggedSelector,
  wishlistSelector,
} from '../../../store/user/userSelector';
import { setWishlist } from '../../../store/user/userSlice';

function HomeSlide({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { backdrop_path, id, overview, release_date, vote_average, title } =
    item;

  const isLogged = useSelector(isLoggedSelector);
  const wishlist = useSelector(wishlistSelector);

  const wishlistActive = wishlist.includes(id);

  const redirectHandler = () => {
    navigate(`/movie/${id}`);
  };

  const wishlistHandler = () => {
    if (!isLogged) {
      alert('you must login before add wishlist');
      navigate('/auth/sign-in');
    }
    if (isLogged) {
      dispatch(setWishlist(id));
    }
  };

  return (
    <section className="home-slide">
      <div className="slide__background-image">
        <img src={imageUrl(backdrop_path)} alt="title" className="slide__img" />
      </div>
      <div className="slide__content container">
        <h1 className="heading-1 slide__heading">{title}</h1>
        <div className="slide__rates">
          <div className="slide__stars">
            <i className="fa-solid fa-star slide__icon slide__icon--star"></i>
            <i className="fa-solid fa-star slide__icon slide__icon--star"></i>
            <i className="fa-solid fa-star slide__icon slide__icon--star"></i>
            <i className="fa-solid fa-star slide__icon slide__icon--star"></i>
            <i className="fa-solid fa-star slide__icon slide__icon--star"></i>
          </div>
          <div className="slide__vote-avg">
            {vote_average.toFixed(1)} <span>/ 10 votes</span>
          </div>
        </div>
        <p className="slide__overview">{overview}</p>
        <span className="slide__release">{release_date}</span>
        <div className="slide__actions">
          {/* btn watch now */}
          <Button className="btn--primary" onClick={redirectHandler}>
            Watch now
          </Button>
          {/* slide__wishlist--active */}
          <div
            className={`slide__wishlist ${
              wishlistActive ? 'slide__wishlist--active' : ''
            }`}
            onClick={wishlistHandler}
          >
            <i className="fa-solid fa-heart slide__icon slide__icon--wishlist"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeSlide;
