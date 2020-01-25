import React from 'react';
import './Projects.scss';
import { ProjectItems } from '../constants/Projects';
import ScrollMarker from '../components/ScrollMarker';

const ProjectItem = ({ img, title, link, tools, description, imgStyle }) => {
  const descriptionMarkup = description.map(d => (
    <div className="ProjectItem-description-item">{d}</div>
  ));

  return (
    <a className="ProjectItem" href={link} target="_blank" rel="noopener noreferrer">
      <div className="ProjectItem-image"><img src={img} style={imgStyle} alt={title} /></div>
      <div className="ProjectItem-details">
        <div className="ProjectItem-title">{title}</div>
        <div className="ProjectItem-tools">{tools}</div>
        <div className="ProjectItem-description">{descriptionMarkup}</div>
      </div>
    </a>
  );
}

const Projects = () => {
  const projectItems = ProjectItems.map(p => (
    <ProjectItem {...p} />
  ));

  return (
    <div className="Section Section-Secondary Projects">
      <ScrollMarker sectionId="projects" />
      <div className="Projects-container">
          <div className="Section-header">
            Projects
          </div>
          <div className="Projects-items-container">
            {projectItems}
          </div>
      </div>
    </div>
  );
}

export default Projects;
