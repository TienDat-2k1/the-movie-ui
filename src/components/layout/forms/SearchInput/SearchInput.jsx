import { forwardRef } from 'react';
import './Input.scss';

function SearchInput({ className, ...otherProps }, ref) {
  return (
    <div className="input-search">
      <input
        ref={ref}
        className={` input input__search ${className}`}
        {...otherProps}
      />
    </div>
  );
}
export default forwardRef(SearchInput);
