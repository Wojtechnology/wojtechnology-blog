import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-center">
          <Link className="logo-text" to="/">wojtechnology</Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
