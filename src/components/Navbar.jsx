import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <Link className="item" to="/">Home</Link>
      </li>
      <li>
        <Link className="item" to="calculator">Calculator</Link>
      </li>
      <li>
        <Link className="item last" to="quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
