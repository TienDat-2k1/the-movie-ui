import './MoreLikeThis.scss';
import { useEffect, useState } from 'react';
import api from '../../../api/tmdbApi';
import SimilarItem from './SimilarItem';
import Loading from '../../Loading/Loading';

function MoreLikeThis({ idMovie }) {
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    const fetchMovieSimilar = async () => {
      const res = await fetch(
        api(`/movie/${idMovie}/similar`, '&language=en-US&page=1')
      );
      const data = await res.json();
      setMovieSimilar(data);
    };
    fetchMovieSimilar();
  }, [idMovie]);
  return (
    <div className="more-like-this-container">
      <h2>More like this</h2>
      {!movieSimilar && <Loading />}
      {movieSimilar && (
        <div className="similar-list">
          {movieSimilar &&
            movieSimilar.results
              .filter((_, index) => index < 8)
              .map(similar => <SimilarItem key={similar.id} item={similar} />)}
          {/* <SimilarItem /> */}
        </div>
      )}
    </div>
  );
}
export default MoreLikeThis;
