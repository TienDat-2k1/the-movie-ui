import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  movieGridSelect,
  sortTypeSelector,
} from '../../../store/movie/movieSelector';
import { fetchMovieGridStart } from '../../../store/movie/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination';
import Spinner from '../spinner/Spinner';
import './MovieGrid.scss';

function MovieGrid() {
  const dispatch = useDispatch();
  const movies = useSelector(movieGridSelect);
  const sortType = useSelector(sortTypeSelector);

  useEffect(() => {
    dispatch(fetchMovieGridStart({ type: 'popular', page: 1 }));
  }, [dispatch]);

  return (
    <>
      {!movies.length && <Spinner />}
      {movies.length && (
        <div className="movie__grid  container">
          <ul className="grid__list mb-large">
            {movies &&
              movies.map(grid => (
                <li key={grid.id} className="grid__item">
                  <MovieCard movie={grid} />
                </li>
              ))}
          </ul>
          <div className="grid__pagination">
            <Pagination />
          </div>
        </div>
      )}
    </>
  );
}
export default MovieGrid;
