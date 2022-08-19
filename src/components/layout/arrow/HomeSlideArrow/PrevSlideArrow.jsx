import './HomeSlideArrow.scss';

function PrevSlideArrow({ onClick }) {
  return (
    <div className="arrow__prev" onClick={onClick}>
      <i className="fa-solid fa-angles-left arrow__icon"></i>
    </div>
  );
}
export default PrevSlideArrow;
