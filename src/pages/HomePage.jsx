import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';
import ProjectGrid from '../components/ProjectGrid.jsx';
import { projectsData } from '../data/projects.js';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 1.5rem' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-dark)' }}>
          ⏳ Loading Portfolio Content...
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-text-content">
          <h1 className="hero-heading">
            MY NAME IS <span className="highlight-bold">SAI JASWANTH...</span>
          </h1>

          <p className="hero-subtitle">
            <em>Computer Science & Engineering Student</em> based at <strong>NIT Warangal</strong>
          </p>

          <Link to="/contact" className="btn-black-pill">
            Let's talk with me ↗
          </Link>

          <div className="hero-quick-contacts">
            <a href="tel:+917601014831" className="quick-contact-item">
              📞 +91 7601014831
            </a>
            <a href="mailto:saijaswanthvankadara1901@gmail.com" className="quick-contact-item">
              ✉ saijaswanthvankadara1901@gmail.com
            </a>
          </div>
        </div>

        <div className="hero-art-container">
          <div className="hero-shape-backdrop"></div>
          <img src={profileImg} alt="Sai Jaswanth Vankadara" className="hero-profile-image" />
          <div className="hero-decor-badge">
            B.Tech CSE @ NIT Warangal '28
          </div>
        </div>
      </section>

      {/* Featured Projects Section in Vertical Manner */}
      <section>
        <span className="section-caption">Work</span>
        <h2 className="section-title-large">RECENT PROJECTS</h2>
        <ProjectGrid projects={projectsData} layout="vertical" />
      </section>
    </div>
  );
}

export default HomePage;