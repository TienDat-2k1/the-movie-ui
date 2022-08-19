import './HomeSlideArrow.scss';

function NextSlideArrow({ onClick }) {
  return (
    <div className="arrow__next" onClick={onClick}>
      <i className="fa-solid fa-angles-right arrow__icon"></i>
    </div>
  );
}
export default NextSlideArrow;
