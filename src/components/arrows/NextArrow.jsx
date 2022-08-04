import classes from './NextArrow.module.scss';
import slider from 'react-slick';

function NextArrow({ onClick }) {
  return (
    <div className={classes['next-arrow-container']}>
      <i className="fa-solid fa-angles-right" onClick={onClick}></i>
    </div>
  );
}
export default NextArrow;
