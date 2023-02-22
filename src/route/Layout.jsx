import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';
import './Layout.scss';

const Layout = () => (
  <div className="main-container">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
