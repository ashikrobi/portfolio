import AOS from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({duration: 1500});
  }, []);
  return (
    <div className="w-75 text-center m-auto">
      <h1
        data-aos="fade-right"
        className="text-center mb-5 about-bottom-border mt-5 pt-5"
        style={{fontSize: "2.5rem"}}
      >
        ABOUT
      </h1>
      <div className="row">
        <div data-aos="fade-right" className="col-md-6">
          <div className="headshot headshot-1"></div>
          <h1>Who am i?</h1>
          <p>
            I am a Front-End Developer for{" "}
            <span className="text-info">Silicon Valley</span> in Comilla, BD.
          </p>
          <p>I have passion for problem solving and design</p>
          <p className="text-info">Let's create.</p>
        </div>
        <div data-aos="fade-left" className="col-md-6">
          <div className="progress mb-2" style={{height: "30px"}}>
            <div
              className="progress-bar bg-info fs-5 text-start ps-5"
              role="progressbar"
              style={{width: "90%"}}
            >
              HTML
            </div>
          </div>
          <div className="progress mb-2" style={{height: "30px"}}>
            <div
              className="progress-bar bg-info fs-5 text-start ps-5"
              role="progressbar"
              style={{width: "90%"}}
            >
              CSS
            </div>
          </div>
          <div className="progress mb-2" style={{height: "30px"}}>
            <div
              className="progress-bar bg-info fs-5 text-start ps-5"
              role="progressbar"
              style={{width: "80%"}}
            >
              React
            </div>
          </div>
          <div className="progress mb-2" style={{height: "30px"}}>
            <div
              className="progress-bar bg-info fs-5 text-start ps-5"
              role="progressbar"
              style={{width: "75%"}}
            >
              JavaScript
            </div>
          </div>
          <div className="progress mb-2" style={{height: "30px"}}>
            <div
              className="progress-bar bg-info fs-5 text-start ps-5"
              role="progressbar"
              style={{width: "75%"}}
            >
              Node
            </div>
          </div>
          <div className="progress mb-2" style={{height: "30px"}}>
            <div
              className="progress-bar bg-info fs-5 text-start ps-5"
              role="progressbar"
              style={{width: "95%"}}
            >
              Photoshop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
