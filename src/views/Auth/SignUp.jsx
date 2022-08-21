import Button from '../../components/layout/forms/Button/Button';
import FormInput from '../../components/layout/forms/FormInput/FormInput';
import { useNavigate, Link } from 'react-router-dom';

import './Sign.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpStart } from '../../store/user/userSlice';
import {
  isLoggedSelector,
  userErrorSelector,
} from '../../store/user/userSelector';
function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userError = useSelector(userErrorSelector);
  const isLogged = useSelector(isLoggedSelector);

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged]);

  useEffect(() => {
    if (userError) {
      alert(userError);
    }
  }, [userError]);

  const [inputField, setInputField] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = inputField;

  useEffect(() => {}, [displayName, email, password, confirmPassword]);

  const inputChangeHandler = e => {
    const { name, value } = e.target;

    setInputField({ ...inputField, [name]: value });
  };

  const formSubmitHandler = async e => {
    e.preventDefault();

    console.log(inputField);
    dispatch(signUpStart(inputField));
    // const user = await createUser(email, password);
  };

  const inputs = [
    {
      id: 1,
      name: 'displayName',
      type: 'text',
      errorMessage:
        "Display Name should be 3-16 characters and should't include any special character!",
      label: 'Display Name',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      errorMessage:
        'Password must least 6 characters! (include single character and digit)',
      label: 'Password',
      pattern: `^(?=.*[a-zA-Z])(?=.*\\d)[A-Za-z\\d][A-Za-z\\d!@#$%^&*()_+]{6,19}$`,
      required: true,
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      errorMessage: 'Password does not match!',
      label: 'Confirm Password',
      pattern: password,
      required: true,
    },
  ];

  return (
    <main className="sign__container">
      <div
        className="sign__back"
        onClick={() => {
          navigate('/');
        }}
      >
        <i className="fa-solid fa-left-long"></i>
      </div>
      <h3 className="heading-3 mb-small">Sign Up</h3>
      <form action="" onSubmit={formSubmitHandler}>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={inputField[input.name]}
            onChange={inputChangeHandler}
          />
        ))}

        <div className="sign__description mb-small">
          <span>If you have an account </span>
          <Link to="../sign-in">Sign in now</Link>
        </div>
        <div className="btn-container">
          <Button type="submit" className="btn--sign sign__btn ">
            SIGN UP
          </Button>
        </div>
      </form>
    </main>
  );
}
export default SignUp;
