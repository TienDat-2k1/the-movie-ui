import './SimilarItem.scss';
import imageUrl from './../../../api/imageUrl';

function SimilarItem({ item }) {
  const { id, title, poster_path, vote_average, release_date } = item;
  return (
    <div className="similar-item-container">
      <div className="similar-item--image">
        <img src={imageUrl(poster_path)} alt={title} />
      </div>
      <div className="content--title">
        <h2>{title}</h2>
      </div>
      <div className="content--rate">
        {/* <i className="fa-solid fa-star"></i> */}
        <span>{vote_average.toFixed(1)}</span>
      </div>
      <div className="content--year-product">{release_date.slice(0, 4)}</div>
      <div className="content--time">
        2H {(Math.random() * 60).toFixed(0)}MIN
      </div>
    </div>
  );
}
export default SimilarItem;
