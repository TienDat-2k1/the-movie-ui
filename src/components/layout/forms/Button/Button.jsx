import './Button.scss';

function Button({ children, className, ...otherProps }) {
  return (
    <button className={`btn ${className}`} {...otherProps}>
      {children}
    </button>
  );
}
export default Button;
