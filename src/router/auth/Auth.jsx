import { Outlet } from 'react-router-dom';
import './Auth.scss';
function Auth() {
  return (
    <div className="auth-container">
      <Outlet />
    </div>
  );
}
export default Auth;
