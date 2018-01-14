import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
        SocialMoms
        </Link>
      </div>
      <ul className="nav navbar-nav ">
      <li
        className={
          window.location.pathname === "/" ||
          window.location.pathname === "/about"
            ? "active"
            : ""
        }
      >
        <Link to="/">About</Link>
      </li>

      </ul>
      <ul className="nav navbar-nav navbar-right">

        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Explore</Link>
        </li>
        <li className={window.location.pathname === "/playgroup" ? "active" : ""}>
          <Link to="/">Plagroups</Link>
        </li>

        <li className={window.location.pathname === "/login" ? "active" : ""}>
          <Link to="/login">Login</Link>
        </li>
        <li
          className={
            window.location.pathname === "/signup"
              ? "active"
              : ""
            }
            >
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;