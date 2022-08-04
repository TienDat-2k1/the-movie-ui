import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Slider from 'react-slick';
import Loading from '../Loading/Loading';

function Movie({ movies, ...otherProps }) {
  const [movieItems, setMovieItems] = useState(movies);

  useEffect(() => {
    setMovieItems(movies);
  }, [movies]);

  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <>
      {!movieItems && <Loading />}
      {movieItems && (
        <div className="movie-container">
          <Slider {...settings}>
            {movieItems.results.map(movie => (
              <MovieCard key={movie.id} movie={movie} {...otherProps} />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
export default Movie;
