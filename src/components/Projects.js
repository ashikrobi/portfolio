import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import ProjectCard from "./ProjectCard";

const projectStyles = {
  minHeight: "700px",
  backgroundColor: "#F5F5F5",
};
const projectData = [
  {
    id: 1,
    title: "ShobujCha",
    shortDescription: "it’s an online store for selling tea, matcha & teabags.",
    webLink: "https://complete-website-client-32cf3.web.app/",
    img: project1,
  },
  {
    id: 2,
    title: "BOOKBAR",
    shortDescription: "It’s an online store of books",
    webLink: "https://full-stack-client-7f5b5.firebaseapp.com/",
    img: project2,
  },
  {
    id: 3,
    title: "Team Builder",
    shortDescription:
      "Team building site with costing calculation for premier league of cricket",
    webLink: "https://comilla-victorians.netlify.app/",
    img: project3,
  },
];
const Projects = () => {
  return (
    <div style={projectStyles}>
      <div className="display-4 text-center mt-5">
        <h1 style={{fontSize: "2.5rem"}}>PROJECTS</h1>
      </div>
      <div className="row d-flex justify-content-center mb-5 pb-5">
        {projectData.map((project) => (
          <ProjectCard project={project} key={project.id}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
