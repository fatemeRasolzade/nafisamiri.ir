import React from "react";
import "../styles/ProjectDisplay.css";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="nafise" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      
    </div>
  );
}

export default ProjectDisplay;