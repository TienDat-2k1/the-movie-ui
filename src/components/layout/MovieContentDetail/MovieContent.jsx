import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  isLoggedSelector,
  wishlistSelector,
} from '../../../store/user/userSelector.js';
import { setWishlist } from '../../../store/user/userSlice.js';
import imageUrl from '../../../api/imageUrl';
import Button from '../forms/Button/Button';
import MovieCast from '../MovieCast/MovieCast';
import api from '../../../api/tmdbApi';
import MovieSimilar from '../MovieSimilar/MovieSimilar';
import './MovieContent.scss';
import { useNavigate } from 'react-router-dom';
import MovieTrailer from './MovieTrailer.jsx';

function MovieContent({ detailMovie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [castList, setCastList] = useState();
  const [gridActive, setGridActive] = useState(false);
  const { id, title, overview, poster_path, release_date, genres } =
    detailMovie;

  const isLogged = useSelector(isLoggedSelector);
  const wishlist = useSelector(wishlistSelector);

  const wishlistActive = wishlist.includes(id);

  useEffect(() => {
    const fetchCastList = async id => {
      const res = await fetch(api(`movie/${id}/credits`, '&language=en-US'));
      const data = await res.json();
      setCastList(data.cast);
    };
    fetchCastList(id);
  }, [id]);

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
    <section className="movie__content container">
      <div className="content__detail">
        <div className="content__poster-box">
          <img src={imageUrl(poster_path)} alt="" className="poster__img" />
        </div>
        <div className="content__heading">
          <h2 className="content__title">{title}</h2>
          <div className="content__genres">
            {genres.map(genre => (
              <Button
                key={genre.id}
                className="btn--transparent content__genre"
              >
                {genre.name}
              </Button>
            ))}
          </div>
          <div className="content__actions">
            <Button className="btn--primary">Watch</Button>
            <div
              className={`content__wishlist ${
                wishlistActive ? 'content__wishlist--active' : ''
              }`}
            >
              <i
                className="fa-solid fa-heart wishlist--icon"
                onClick={wishlistHandler}
              ></i>
            </div>
            <div className="content__share">
              <i className="fa-solid fa-share-nodes share--icon"></i>
            </div>
            <div className="content__ellipsis">
              <i className="fa-solid fa-ellipsis ellipsis--icon"></i>
            </div>
          </div>
        </div>
        <span
          className={`content__release ${
            gridActive ? 'content__release--active' : ''
          }`}
        >
          {release_date}
        </span>
        <div className="content__storyline">
          <h4 className="heading-4 heading-4--weight heading-4-light">
            StoryLine
          </h4>
          <p
            className={`content__overview ${
              gridActive ? 'content__overview--active' : ''
            }`}
          >
            {overview}
          </p>
          <div className="content__state">
            <span
              className="state__name"
              onClick={() => setGridActive(!gridActive)}
            >
              {gridActive ? 'Hide' : 'See more'}
            </span>
            <i
              className={`fa-solid fa-angle-${
                gridActive ? 'up' : 'down'
              } state__icon`}
            ></i>
          </div>
        </div>
        <div
          className={`content__cast ${
            gridActive ? 'content__cast--active' : ''
          }`}
        >
          <h4 className="heading-4 heading-4--weight heading-4--light cast__title">
            Cast
          </h4>
          <MovieCast castList={castList} />
        </div>

        <MovieTrailer title={title} id={id} />
      </div>
      <div className="movie__similar">
        <MovieSimilar movieId={id} />
      </div>
    </section>
  );
}
export default MovieContent;
