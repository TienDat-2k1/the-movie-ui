import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../../api/tmdbApi';
import './MovieSimilar.scss';
import SimilarItem from './SimilarItem';

function MovieSimilar({ movieId }) {
  const [similarList, setSimilarList] = useState();

  useEffect(() => {
    const fetchMovieSimilar = async id => {
      const res = await fetch(
        api(`movie/${id}/similar`, '&language=en-US&page=1')
      );
      const data = await res.json();
      setSimilarList(data.results);
    };
    fetchMovieSimilar(movieId);
  }, [movieId]);

  return (
    <ul className="similar__list">
      {similarList &&
        similarList
          .filter((_, i) => i < 7)
          .map(similar => <SimilarItem key={similar.id} similar={similar} />)}
    </ul>
  );
}
export default MovieSimilar;
