import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination';
import './MovieGrid.scss';

function MovieGrid({ movieGrid, pagination }) {
  return (
    <>
      {movieGrid.length && (
        <div className="movie__grid  container">
          <ul className="grid__list mb-large">
            {movieGrid &&
              movieGrid.map(grid => (
                <li key={grid.id} className="grid__item">
                  <MovieCard movie={grid} />
                </li>
              ))}
          </ul>
          <div className="grid__pagination">
            <Pagination pagination={pagination} />
          </div>
        </div>
      )}
    </>
  );
}
export default MovieGrid;
