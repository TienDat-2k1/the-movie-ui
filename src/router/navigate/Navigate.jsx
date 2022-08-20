import { Outlet } from 'react-router-dom';
import NavBar from '../../components/layout/navigation/navbar/NavBar';
import Footer from '../../components/layout/footer/Footer';

function Navigate() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
export default Navigate;
