import React from 'react';
import ProjectCard from './ProjectCard.jsx';

function ProjectGrid({ projects, layout = 'grid' }) {
  if (!projects || projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <div className={`project-grid ${layout === 'vertical' ? 'vertical-layout' : ''}`}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;