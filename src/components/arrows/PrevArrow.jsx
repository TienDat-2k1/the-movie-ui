import classes from './PrevArrow.module.scss';

function PrevArrow({ onClick }) {
  return (
    <div className={classes['prev-arrow-container']}>
      <i className="fa-solid fa-angles-left" onClick={onClick}></i>
    </div>
  );
}
export default PrevArrow;
