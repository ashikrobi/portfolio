import ParticlesBg from "particles-bg";
import React from "react";

const Header = () => {
  return (
    <div
      style={{height: "97vh"}}
      className="container d-flex justify-content-center align-items-center"
    >
      <ParticlesBg type="lines" bg={true} />
      <div>
        <h1 className="text-white">
          Hello, I'm <span style={{color: "#E31B6D"}}>Ashiqur Rahman</span>.
        </h1>
        <h1 className="text-white mb-3">I'm a Frontend Web Developer.</h1>
        <a
          href="https://drive.google.com/file/d/1f9dyQjwwQwMEFzfxT4XO0AR9Acx0ExOq/view?usp=sharing"
          download
          className="btn btn-outline-danger"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
