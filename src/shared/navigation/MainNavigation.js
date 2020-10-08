import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Your Places</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavBar />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
