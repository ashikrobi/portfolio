import React from "react";

const ProjectCard = ({project}) => {
  const {title, shortDescription, webLink, img} = project;
  return (
    <div className="card ml-5 mt-5" style={{width: "30rem"}}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4>{title}</h4>
        <p className="card-text">{shortDescription}</p>
        <a href={webLink}>VISIT SITE</a>
      </div>
    </div>
  );
};

export default ProjectCard;
