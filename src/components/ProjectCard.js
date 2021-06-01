import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectCard = ({ project }) => {
  const { title, shortDescription, webLink, img } = project;
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div
      data-aos='zoom-in'
      className='card mx-5 shadow mt-5'
      style={{ width: "30rem", border: "none" }}>
      <img src={img} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h4>{title}</h4>
        <p className='card-text'>{shortDescription}</p>
        <a href={webLink} className='text-decoration-none'>
          VISIT SITE
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
