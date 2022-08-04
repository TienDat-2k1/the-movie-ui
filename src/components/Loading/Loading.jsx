import classes from './Loading.module.scss';

function Loading() {
  return (
    <div className={classes['loading-container']}>
      <div className={classes['lds-ring']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loading;
