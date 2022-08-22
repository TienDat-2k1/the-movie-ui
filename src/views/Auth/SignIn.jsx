import Button from '../../components/layout/forms/Button/Button';
import FormInput from '../../components/layout/forms/FormInput/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import './Sign.scss';
import { useState } from 'react';
import { signInGooglePopup } from '../../utils/firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess } from '../../store/user/userSlice';
import { isLoggedSelector } from '../../store/user/userSelector';
import { useEffect } from 'react';
function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogged = useSelector(isLoggedSelector);

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged, navigate]);

  const [inputField, setInputField] = useState({
    email: '',
    password: '',
  });

  const inputChangeHandler = e => {
    const { name, value } = e.target;
    setInputField({ ...inputField, [name]: value });
  };

  const formSubmitHandler = e => {
    e.preventDefault();

    dispatch(signInStart(inputField));
  };

  const googleSignInHandler = async () => {
    const { user } = await signInGooglePopup();
    const { uid, displayName, email, photoURL } = user;

    dispatch(signInSuccess({ uid, displayName, email, photoUrl: photoURL }));
  };

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
      <h3 className="heading-3 mb-small">Already have an account?</h3>
      <span className="sign__title">Sign in with your email and password</span>
      <form action="" onSubmit={formSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={inputChangeHandler}
          value={inputField.email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={inputChangeHandler}
          value={inputField.password}
        />

        <div className="sign__description mb-small">
          <span>If your don't have an account </span>
          <Link to="../sign-up">Register now</Link>
        </div>
        <div className="btn-container">
          <Button type="submit" className="btn--sign sign__btn ">
            SIGN IN
          </Button>
          <Button
            type="button"
            className="btn--google sign__btn"
            onClick={googleSignInHandler}
          >
            <i className="fa-brands fa-google"></i>
            <span>Google sign in</span>
          </Button>
        </div>
      </form>
    </main>
  );
}
export default SignIn;
