import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../api/tmdbApi';
import { filterWithGenresStart } from '../../../store/movie/movieSlice';
import {
  movieFilterGenres,
  pageActiveSelector,
} from '../../../store/movie/movieSelector';
import './MovieGenres.scss';

function MovieGenres() {
  const dispatch = useDispatch();

  const [genres, setGenres] = useState();
  const [genresActive, setGenresActive] = useState(false);

  const getGenres = useSelector(movieFilterGenres);
  const getPageActive = useSelector(pageActiveSelector);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(api('genre/movie/list', '&language=en-US'));
      const data = await res.json();
      setGenres(data.genres);
    };
    fetchGenres();
  }, []);

  const filterGenresHandler = id => {
    const existingGenre = getGenres.find(gen => gen === id);
    if (!existingGenre) {
      const payload = {
        genres: [...getGenres, id],
        page: 1,
      };
      dispatch(filterWithGenresStart(payload));
    } else {
      const payload = {
        genres: getGenres.filter(gen => gen !== id),
        page: 1,
      };
      dispatch(filterWithGenresStart(payload));
    }
  };
  return (
    <section
      className={`movie__genres genres__container ${
        genresActive ? 'genres__container--active' : ''
      }`}
    >
      <div className="genres__close" onClick={() => setGenresActive(false)}>
        <i className="fa-solid fa-xmark genres__close--icon"></i>
      </div>
      <div
        className={`genres__toggle ${
          !genresActive ? 'genres__toggle--active' : ''
        }`}
        onClick={() => setGenresActive(true)}
      >
        <i className="fa-solid fa-border-all genres__icon"></i>
      </div>
      <div
        className={`genres__content ${
          genresActive ? 'genres__content--active' : ''
        }`}
      >
        <h4 className="heading-4 heading-4--light genres__title">genres</h4>
        <ul className="genres__list">
          {genres &&
            genres.map(genre => (
              <li
                key={genre.id}
                className={`genres__item ${
                  getGenres.length && getGenres.includes(genre.id)
                    ? 'genres__item--active'
                    : ''
                }`}
                onClick={() => {
                  filterGenresHandler(genre.id);
                }}
              >
                {genre.name}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
export default MovieGenres;
