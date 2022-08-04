import Movie from './Movie';
import './Movies.scss';

import api from '../../api/tmdbApi';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

function Movies({ title, ...otherProps }) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchMovies = async title => {
      const res = await fetch(api(`movie/${title}`, '&language=en-US&page=1'));
      const data = await res.json();
      setMovies(data);
    };
    fetchMovies(title);
  }, [title]);
  return (
    <>
      {!movies && <Loading />}
      {movies && (
        <div className="movies-container container">
          <div className="movies-title">
            <div className="movies-title--content">
              <h2>
                {title.includes('_')
                  ? title
                      .toUpperCase()
                      .split('_')
                      .reduce(
                        (acc, curr) =>
                          (acc +=
                            ' ' +
                            curr.slice(0, 1) +
                            curr.slice(1).toLowerCase()),
                        ''
                      )
                  : title.toUpperCase().slice(0, 1) +
                    title.slice(1).toLowerCase()}
              </h2>
              <i className="fa-solid fa-star"></i>
            </div>

            <div className="movie-title--tab">
              <div>See all</div>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <Movie movies={movies} {...otherProps} />
        </div>
      )}
    </>
  );
}
export default Movies;
