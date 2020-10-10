import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const NavBar = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          {" "}
          home{" "}
        </NavLink>
      </li>
      <li>
        <NavLink to="/ra/blog">my blog</NavLink>
      </li>
      <li>
        <NavLink to="/blog/new">add blog post</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
