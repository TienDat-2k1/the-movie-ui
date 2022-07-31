import classes from './Overlay.module.scss';

function Overlay({ children, ...otherProps }) {
  return (
    <div className={classes.overlay} {...otherProps}>
      {children}
    </div>
  );
}
export default Overlay;
