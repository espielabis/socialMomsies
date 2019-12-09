import React from "react";
import { Link } from "react-router-dom";
import googleButton from "../../pages/Login/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png";
import "./Navbar.css";

const page = window.location.href.split("/");
const Navbar = props => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          <img
            src={"/../../images/logo3.png"}
            style={{ width: 100, height: 60, marginTop: -17 }}
          />
        </Link>
      </div>
      {page[3] !== "" && (
        <ul className="nav navbar-nav navbar-right">
          <li
            className={window.location.pathname === "/search" ? "active" : ""}
          >
            <Link to="/search">Explore</Link>
          </li>
          <li
            className={
              window.location.pathname === "/playgroup" ? "active" : ""
            }
          >
            <Link to="/playgroup">Playgroups</Link>
          </li>
          <li className={window.location.pathname === "/" ? "active" : ""}>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      )}
      {page[3] === "" && (
        <ul className="nav navbar-nav navbar-right">
          <a href="http://localhost:3001/auth/google/">
            {/*<GoogleButton /> */}
            <img src={googleButton} alt="sign into Google Button" />
          </a>
        </ul>
      )}
    </div>
  </nav>
);

export default Navbar;
