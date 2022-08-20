import { useState, useEffect } from 'react';
import api from '../../../api/tmdbApi';
import Spinner from '../spinner/Spinner';
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';

import './MoviesSlide.scss';
import NextSlideArrow from '../arrow/HomeSlideArrow/NextSlideArrow';
import PrevSlideArrow from '../arrow/HomeSlideArrow/PrevSlideArrow';

function MoviesSlide({ title }) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchMovies = async title => {
      const res = await fetch(api(`movie/${title}`, '&language=en-US&page=1'));
      const data = await res.json();
      setMovies(data);
    };
    fetchMovies(title);
  }, [title]);

  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
    arrows: false,
    nextArrow: <NextSlideArrow />,
    prevArrow: <PrevSlideArrow />,
  };
  return (
    <>
      {!movies && <Spinner />}
      {movies && (
        <div className="movies container">
          <h2 className="heading-2 heading-2--light movies__heading">
            {title.replace('_', ' ')}
          </h2>
          <div className="movies__actions">
            <span className="movies__seeall">See all &gt;</span>
          </div>

          <ul className="movies__list">
            <Slider {...settings}>
              {movies.results.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </Slider>
          </ul>
        </div>
      )}
    </>
  );
}
export default MoviesSlide;
