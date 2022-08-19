import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortTypeSelector } from '../../../store/movie/movieSelector';
import { setSortType } from '../../../store/movie/movieSlice';
import './MovieSortType.scss';

function MovieSortType() {
  const dispatch = useDispatch();

  const sortType = useSelector(sortTypeSelector);

  const sortHandler = type => {
    dispatch(setSortType(type));
  };
  return (
    <section className="movie__sort" id="sort">
      {sortType && (
        <ul className="sort__list">
          <li
            className={`sort__item ${
              sortType === 'now_playing' ? 'sort__item--active' : ''
            }`}
            onClick={sortHandler.bind(null, 'now_playing')}
          >
            Now Playing
          </li>
          <li
            className={`sort__item ${
              sortType === 'popular' ? 'sort__item--active' : ''
            }`}
            onClick={sortHandler.bind(null, 'popular')}
          >
            Popular
          </li>
          <li
            className={`sort__item ${
              sortType === 'top_rated' ? 'sort__item--active' : ''
            }`}
            onClick={sortHandler.bind(null, 'top_rated')}
          >
            Top Rated
          </li>
          <li
            className={`sort__item ${
              sortType === 'upcoming' ? 'sort__item--active' : ''
            }`}
            onClick={sortHandler.bind(null, 'upcoming')}
          >
            Upcoming
          </li>
        </ul>
      )}
    </section>
  );
}
export default MovieSortType;
