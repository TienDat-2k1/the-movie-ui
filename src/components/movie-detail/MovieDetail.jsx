import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/tmdbApi';
import Loading from '../Loading/Loading';
import ImageLayoutBackdrop from './ImageLayoutBackdrop';
import MoreLikeThis from './movie-similar/MoreLikeThis';
import './MovieDetail.scss';
import MovieDetailLayout from './MovieDetailLayout';

function MovieDetail() {
  const [detailMovie, setDetailMovie] = useState();
  const { idMovie } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async id => {
      const res = await fetch(api(`/movie/${id}`));
      const data = await res.json();
      setDetailMovie(data);
    };
    fetchMovieDetail(idMovie);
  }, [idMovie]);

  return (
    <>
      {!detailMovie && <Loading />}
      {detailMovie && (
        <div className="movie-detail-containers">
          {!detailMovie && (
            <div className="fullscreen">
              <Loading />
            </div>
          )}
          {detailMovie && (
            <>
              <ImageLayoutBackdrop movie={detailMovie} />
              <div className="movie-detail-layout-container container">
                <MovieDetailLayout movie={detailMovie} />
                <MoreLikeThis idMovie={idMovie} />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
export default MovieDetail;
