import './PopupItem.scss';

function PopupItem({ className, children, ...otherProps }) {
  return (
    <div className={className} {...otherProps}>
      {children}
    </div>
  );
}
export default PopupItem;
