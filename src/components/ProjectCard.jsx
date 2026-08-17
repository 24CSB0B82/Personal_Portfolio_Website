import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <article className="project-card">
      <div className="project-img-wrapper">
        <img src={project.image} alt={project.title} className="project-img" />
      </div>

      <div className="project-info">
        <span className="project-tag">{project.category} • {project.year}</span>
        <h3 className="project-title">{project.title}</h3>

        <p className="project-tech">
          <strong>Tech:</strong> {project.techStack.join(', ')}
        </p>

        <p className="project-short-desc">
          {project.description}
        </p>

        <div style={{ marginBottom: '1rem' }}>
          <button
            type="button"
            onClick={toggleDetails}
            style={{
              padding: '0.4rem 0.85rem',
              fontSize: '0.8rem',
              fontWeight: '700',
              background: 'var(--bg-secondary)',
              color: 'var(--text-dark)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer'
            }}
          >
            {showDetails ? 'Hide Key Highlights ▲' : 'Show Key Highlights ▼'}
          </button>
        </div>

        {showDetails && (
          <ul
            className="project-bullets"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '0.85rem 1rem 0.85rem 2rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              marginBottom: '1.25rem',
              fontSize: '0.9rem'
            }}
          >
            {project.bullets.map((bullet, index) => (
              <li key={index} style={{ marginBottom: '0.4rem' }}>{bullet}</li>
            ))}
          </ul>
        )}

        <div className="project-actions">
          <Link to={`/projects/${project.id}`} className="btn-black-pill" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            Full Project Page ↗
          </Link>

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', textDecoration: 'none' }}
            >
              GitHub Repo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;