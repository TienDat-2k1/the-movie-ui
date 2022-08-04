import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';

function Navigate() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default Navigate;
