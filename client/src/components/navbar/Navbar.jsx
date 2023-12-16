import "./navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex">
      <NavLink to="/">
        <h2>NeoG</h2>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/classView">Class</NavLink>
        <NavLink to="/schoolView">School</NavLink>
        <a
          href="https://github.com/kashifhussainpathan/School-Management.git"
          target="_blank"
        >
          Github
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
