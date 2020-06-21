import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-center">
          <Link className="logo-text" to="/">wojtechnology</Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
