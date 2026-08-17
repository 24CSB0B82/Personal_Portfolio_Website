import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects.js';

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="page-wrapper" style={{ textAlign: 'center', padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Project Not Found</h2>
        <p style={{ margin: '1rem 0 2rem', color: 'var(--text-muted)' }}>
          The project ID "{projectId}" does not exist.
        </p>
        <Link to="/projects" className="btn-black-pill">
          ← Back to Works
        </Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <section>
        {/* Properly styled Back to Projects Button */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/projects" className="btn-black-pill" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
            ← Back to Works
          </Link>
        </div>

        <div
          style={{
            background: 'var(--bg-card)',
            border: '2px solid var(--border-dark)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2.5rem', alignItems: 'flex-start' }}>
            {/* Image Box */}
            <div style={{ border: '2px solid var(--border-dark)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>

            {/* Info Box */}
            <div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="project-tag" style={{ fontSize: '0.85rem' }}>
                  {project.category}
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-muted)' }}>
                  • {project.year}
                </span>
              </div>

              <h1 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--text-dark)', margin: '0.5rem 0 0.25rem' }}>
                {project.title}
              </h1>

              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: '500' }}>
                {project.subtitle}
              </p>

              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.75rem', color: 'var(--text-dark)' }}>
                {project.description}
              </p>

              <h3 style={{ fontSize: '1.1rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Tech Stack Used
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1.5px solid var(--border-dark)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.85rem',
                      fontWeight: '800',
                      color: 'var(--text-dark)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Key Highlights & Architecture
              </h3>

              <ul style={{ paddingLeft: '1.25rem', marginBottom: '2rem', color: 'var(--text-dark)' }}>
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem', fontWeight: '500', lineHeight: '1.6' }}>
                    {bullet}
                  </li>
                ))}
              </ul>

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-black-pill"
                >
                  <i className="fa-brands fa-github"></i> View Repository on GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetailPage;