import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <a href="/">
          <img src={logo} className="navbar__img" alt="logo" />
        </a>
        <ul className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
