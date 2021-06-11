import React from "react";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top bar-style">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          🅰🆁
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link button-size btn-bg text-white mx-1 px-1"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link button-size btn-bg text-white mx-1 px-1"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link button-size btn-bg text-white mx-1 px-1"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link button-size btn-bg text-white mx-1 px-1"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
