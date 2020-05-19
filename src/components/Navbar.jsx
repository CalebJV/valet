import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Pullman Valet
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/cars">
          Cars
        </NavLink>
        <NavLink className="nav-item nav-link" to="/drivers">
          Drivers
        </NavLink>
        <NavLink className="nav-item nav-link" to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
