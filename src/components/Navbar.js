import React from "react";
import Scrollspy from "react-scrollspy";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <Scrollspy
      className="nav-bar nav navbar-dark bg-dark bar-style sticky-top justify-content-end mb-3"
      items={["home", "about", "projects", "contact"]}
      currentClassName="is-current">
      <li className="nav-item">
        <a
          className="nav-link btn btn-outline-danger button-size mx-3 mt-2 mb-2"
          href="#home"
          id="test">
          Home
        </a>
      </li>
      <li>
        <a
          className="nav-link btn btn-outline-danger button-size mx-3 mt-2 mb-2"
          href="#about">
          About
        </a>
      </li>
      <li>
        <a
          className="nav-link btn btn-outline-danger button-size mx-3 mt-2 mb-2"
          href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a
          className="nav-link btn btn-outline-danger button-size mx-3 mt-2 mb-2"
          href="#contact">
          Contact Me
        </a>
      </li>
    </Scrollspy>
  );
};

export default Navbar;
