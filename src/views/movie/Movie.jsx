import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackgroundMovie from '../../components/layout/BackgroundMovie/BackgroundMovie';
import MovieGenres from '../../components/layout/MovieGenres/MovieGenres';
import MovieGrid from '../../components/layout/MovieGrid/MovieGrid';
import MovieSortType from '../../components/layout/MovieSortType/MovieSortType';
import {
  movieFilterGenres,
  movieGridSelect,
  pageActiveSelector,
  sortTypeSelector,
  totalPageSelector,
} from '../../store/movie/movieSelector';
import {
  fetchMovieGridStart,
  filterWithGenresStart,
} from '../../store/movie/movieSlice';
import './Movie.scss';

function Movie() {
  const dispatch = useDispatch();
  const movieGrid = useSelector(movieGridSelect);
  const getTotalPage = useSelector(totalPageSelector);
  const getGenres = useSelector(movieFilterGenres);
  const sortType = useSelector(sortTypeSelector);
  const pageActive = useSelector(pageActiveSelector);

  // const [scrolling, setScrolling] = useState(false);
  // const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   const onScroll = e => {
  //     setScrollTop(e.target.documentElement.scrollTop);
  //     setScrolling(e.target.documentElement.scrollTop > scrollTop);
  //   };
  //   window.addEventListener('scroll', onScroll);

  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [scrollTop]);

  useEffect(() => {
    dispatch(fetchMovieGridStart({ type: sortType, page: 1 }));
  }, [sortType, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 200);
  }, [pageActive, getGenres]);

  const handlerPageChange = newPage => {
    if (!!getGenres) {
      dispatch(
        fetchMovieGridStart({
          type: sortType,
          page: newPage.selected + 1,
        })
      );
    } else {
      dispatch(
        filterWithGenresStart({ genres: getGenres, page: newPage.selected + 1 })
      );
    }
  };

  const pagination = {
    totalPages: getTotalPage,
    onPageChange: handlerPageChange,
  };

  return (
    <main className="movie">
      <BackgroundMovie />
      <MovieGenres />
      <div className="movie__container">
        <MovieSortType />
        <MovieGrid movieGrid={movieGrid} pagination={pagination} />
      </div>
    </main>
  );
}
export default Movie;
