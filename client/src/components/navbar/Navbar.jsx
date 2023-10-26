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
      </div>
    </nav>
  );
};

export default Navbar;
