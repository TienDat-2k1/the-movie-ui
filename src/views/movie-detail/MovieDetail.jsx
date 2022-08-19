import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackdropMovie from '../../components/layout/backdropMovie/BackdropMovie';
import api from '../../api/tmdbApi';
import './MovieDetail.scss';
import MovieContent from '../../components/layout/MovieContentDetail/MovieContent';

function MovieDetail() {
  const { idMovie } = useParams();
  const [detailMovie, setDetailMovie] = useState();

  useEffect(() => {
    const fetchMovieDetail = async id => {
      const res = await fetch(api(`/movie/${id}`));
      const data = await res.json();
      setDetailMovie(data);
    };
    fetchMovieDetail(idMovie);
  }, [idMovie]);

  return (
    <main className="movie-detail-layout">
      {detailMovie && <BackdropMovie detailMovie={detailMovie} />}
      {detailMovie && <MovieContent detailMovie={detailMovie} />}
    </main>
  );
}
export default MovieDetail;
