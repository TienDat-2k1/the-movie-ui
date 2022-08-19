import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackgroundMovie from '../../components/layout/BackgroundMovie/BackgroundMovie';
import MovieGenres from '../../components/layout/MovieGenres/MovieGenres';
import MovieGrid from '../../components/layout/MovieGrid/MovieGrid';
import MovieSortType from '../../components/layout/MovieSortType/MovieSortType';
import { sortTypeSelector } from '../../store/movie/movieSelector';
import { fetchMovieGridStart } from '../../store/movie/movieSlice';
import './Movie.scss';

function Movie() {
  return (
    <main className="movie">
      <BackgroundMovie />
      <MovieSortType />
      <MovieGenres />
      <MovieGrid />
    </main>
  );
}
export default Movie;
