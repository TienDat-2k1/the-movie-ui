import { useState } from 'react';
import './FormInput.scss';

function FormInput({ label, errorMessage, ...otherProps }) {
  const [focused, setFocused] = useState(false);
  const handlerFocus = e => {
    setFocused(true);
  };
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        {...otherProps}
        onBlur={handlerFocus}
        focused={focused.toString()}
      />
      {label && (
        <label
          htmlFor=""
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
}
export default FormInput;
