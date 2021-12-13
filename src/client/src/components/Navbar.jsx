import { NavLink } from "react-router-dom";
import navLogo from "../assets/logos/tc-logo-long-wl.png";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          <img src={navLogo} />
        </NavLink>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item" to="docs">
            Docs
          </NavLink>
          <NavLink className="navbar-item" to="members">
            Members
          </NavLink>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Lists</a>
            <div className="navbar-dropdown">
              <NavLink className="navbar-item" to="/"> About </NavLink>
              <NavLink className="navbar-item" to="/"> Jobs </NavLink>
              <NavLink className="navbar-item" to="/"> Contact </NavLink>
              <hr className="navbar-divider" />
              <NavLink className="navbar-item" to="/"> Report an issue </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
