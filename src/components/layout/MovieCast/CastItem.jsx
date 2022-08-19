import imageUrl from '../../../api/imageUrl';

function CastItem({ cast }) {
  const { profile_path, character, name } = cast;

  if (!profile_path) return;
  return (
    <li className="cast__item">
      <div className="cast__avatar">
        <img
          src={imageUrl(profile_path)}
          alt={character}
          className="cast__img"
        />
      </div>
      <div className="cast__names">
        <h5 className="cast__role">{character}</h5>
        <span className="cast__name">{name}</span>
      </div>
    </li>
  );
}
export default CastItem;
