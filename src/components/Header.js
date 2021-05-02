import React from "react";
import ParticlesBg from "particles-bg";

const Header = () => {
  return (
    <div
      style={{minHeight: "1024px"}}
      className="d-sm-flex justify-content-center">
      <ParticlesBg type="lines" bg={true} />
      <div className="d-sm-flex align-items-center">
        <div>
          <h1 className="text-white">
            Hello, I'm <span style={{color: "#E31B6D"}}>Ashiqur Rahman</span>.
          </h1>
          <h1 className="text-white mb-3">I'm a Frontend Web Developer.</h1>
          <button className="btn btn-outline-danger">View My work</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
