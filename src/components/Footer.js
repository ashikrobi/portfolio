import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";

const footerStyle = {
  height: "200px",
  backgroundColor: "#1B242F",
  color: "white",
};
const fontIconSize = {
  fontSize: "40px",
};
const Footer = () => {
  const showCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div style={footerStyle} className="d-sm-flex justify-content-center">
      <div className="d-sm-flex align-items-center">
        <div>
          <a
            href={"https://www.linkedin.com/in/ashikrobi/"}
            className="text-reset mx-2"
            style={fontIconSize}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={"https://github.com/ashikrobi"}
            className="text-reset mx-2"
            style={fontIconSize}>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href={"https://www.facebook.com/ashikrobi"}
            className="text-reset mx-2"
            style={fontIconSize}>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <small style={{display: "block"}}>
            ASHIQUR RAHMAN
            <span style={{color: "#E31B6D"}}>&copy;{showCurrentYear()}</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
