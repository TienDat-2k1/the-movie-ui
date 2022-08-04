import { useState, useEffect } from 'react';
import api from '../../api/tmdbApi';
import Loading from '../Loading/Loading';
import CastItem from './CastItem';
import './Casts.scss';

function Casts({ idMovie }) {
  const [casts, setCasts] = useState();

  useEffect(() => {
    const fetchMovieCast = async () => {
      const res = await fetch(api(`/movie/${idMovie}/casts`));
      const data = await res.json();
      setCasts(data);
    };
    fetchMovieCast();
  }, [idMovie]);
  return (
    <>
      {!casts && <Loading />}
      {casts && (
        <div className="cast-list-items">
          {casts &&
            casts.cast.map(cast => <CastItem key={cast.id} cast={cast} />)}
        </div>
      )}
    </>
  );
}
export default Casts;
