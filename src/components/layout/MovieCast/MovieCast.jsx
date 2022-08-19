import CastItem from './CastItem';
import './MovieCast.scss';

function MovieCast({ castList }) {
  if (!castList) return;

  return (
    <ul className="cast__list">
      {castList && castList.map(cast => <CastItem key={cast.id} cast={cast} />)}
    </ul>
  );
}
export default MovieCast;
