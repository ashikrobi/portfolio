import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import "../components/Footer.css";
import ScrollToTop from "react-scroll-to-top";

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
    <div style={footerStyle} className="d-flex justify-content-center">
      <ScrollToTop
        className="svg"
        svgPath="M0,242.333h242.333V0H0V242.333z M49.749,148.309l-28.284-28.285l99.702-99.702l99.702,99.702l-28.284,28.285
		l-53.244-53.245v124.663h-36.349V95.064L49.749,148.309z"
        color="white"
        viewBox="0 0 256 256"
      />
      <div className="d-flex align-items-center">
        <div>
          <a
            href={"https://www.linkedin.com/in/ashikrobi/"}
            className="text-reset mx-2"
            style={fontIconSize}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={"https://github.com/ashikrobi"}
            className="text-reset mx-2"
            style={fontIconSize}
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href={"https://www.facebook.com/ashikrobi"}
            className="text-reset mx-2"
            style={fontIconSize}
          >
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
