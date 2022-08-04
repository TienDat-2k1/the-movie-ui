import imageUrl from '../../api/imageUrl';

function CastItem(props) {
  const {
    cast: { character, profile_path, name },
  } = props;

  if (!profile_path) {
    return;
  }
  return (
    <div className="cast-item">
      <div className="cast--avatar">
        <img src={imageUrl(profile_path)} alt="name" />
      </div>
      <div className="cast--name">
        <h2>{character}</h2>
        <h4>{name}</h4>
      </div>
    </div>
  );
}
export default CastItem;
