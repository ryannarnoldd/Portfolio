import { Link, useLocation } from 'react-router-dom';

function Nav() {
  // Gets location using useLocation hook and isActive checks if location is current path.
  // This is used to decide if active className is applied to each nav tag.
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`} to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/resume') ? 'active' : ''}`} to="/resume">Resume</Link>
            </li>
          </ul>
    </nav>
  );
}

export default Nav;