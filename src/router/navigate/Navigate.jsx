import { Outlet } from 'react-router-dom';
import NavBar from '../../components/layout/navigation/navbar/NavBar';

function Navigate() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export default Navigate;
