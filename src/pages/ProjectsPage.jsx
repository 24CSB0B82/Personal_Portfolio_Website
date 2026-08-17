import React from 'react';
import ProjectGrid from '../components/ProjectGrid.jsx';
import { projectsData } from '../data/projects.js';

function ProjectsPage() {
  return (
    <div className="page-wrapper">
      <section>
        <span className="section-caption">Work</span>
        <h2 className="section-title-large">RECENT PROJECTS</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
          Explore full-stack web applications, financial tracking tools, and interactive dashboards developed by Sai Jaswanth.
        </p>
        <ProjectGrid projects={projectsData} />
      </section>
    </div>
  );
}

export default ProjectsPage;