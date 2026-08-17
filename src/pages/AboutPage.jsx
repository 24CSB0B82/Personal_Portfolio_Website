import React from 'react';
import profileImg from '../assets/profile.jpg';

function AboutPage() {
  return (
    <div className="page-wrapper">
      <section>
        <span className="section-caption">Nice to meet you!</span>
        <h2 className="section-title-large">WELCOME TO...</h2>

        <div className="about-grid">
          {/* Left Profile Summary Card */}
          <div className="about-profile-card">
            <div className="about-avatar-wrapper">
              <div className="about-avatar-bg"></div>
              <img src={profileImg} alt="Sai Jaswanth Vankadara" className="about-avatar-img" />
            </div>

            <h3 className="about-name">SAI JASWANTH</h3>
            <p className="about-role">CSE Student @ NIT Warangal</p>

            <div className="about-info-list">
              <div className="info-item">
                <label>PHONE</label>
                <span>+91-7601014831</span>
              </div>
              <div className="info-item">
                <label>ROLL NO</label>
                <span>24CSB0B82</span>
              </div>
              <div className="info-item">
                <label>EMAIL</label>
                <span>saijaswanthvankadara1901@gmail.com</span>
              </div>
              <div className="info-item">
                <label>LOCATION</label>
                <span>Warangal, India</span>
              </div>
            </div>

            <a
              href="mailto:saijaswanthvankadara1901@gmail.com"
              className="btn-black-pill"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Contact Direct ↗
            </a>
          </div>

          {/* Right Summary Content & Metric Callouts */}
          <div>
            <div className="about-stats-row">
              <div className="stat-box">
                <span className="stat-number">7.95</span>
                <span className="stat-title">B.Tech CGPA</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">5903</span>
                <span className="stat-title">JEE Adv AIR</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">250+</span>
                <span className="stat-title">CP Problems</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Biography</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.7' }}>
                Hello there! My name is <strong>Sai Jaswanth Vankadara</strong>. I am a Computer Science and Engineering student at the <strong>National Institute of Technology, Warangal (Roll No: 24CSB0B82)</strong>. I am very passionate about full-stack web development (MERN stack), data structures, and financial software systems.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Having secured an All India Rank of 5903 in JEE Advanced 2024, I focus on solving complex algorithmic problems and designing clean, performant applications.
              </p>
            </div>
          </div>
        </div>

        {/* Soft Light Multi-Color Pastel Gradient Experience Banner matching Image 2 */}
        <div className="experience-banner">
          <h3>MY EDUCATION & JOURNEY</h3>
          <p className="experience-banner-intro">
            Academic qualifications, coursework, and competitive programming achievements.
          </p>

          <div className="experience-timeline">
            <div className="timeline-row">
              <div>
                <h4 className="timeline-role">B.Tech in Computer Science & Engineering</h4>
                <p className="timeline-inst">National Institute of Technology, Warangal (CGPA: 7.95)</p>
              </div>
              <span className="timeline-period">2024 – 2028</span>
            </div>

            <div className="timeline-row">
              <div>
                <h4 className="timeline-role">Class XII - Intermediate (MPC)</h4>
                <p className="timeline-inst">Sri Chaitanya Junior College, Telangana (96.8%)</p>
              </div>
              <span className="timeline-period">2022 – 2024</span>
            </div>

            <div className="timeline-row">
              <div>
                <h4 className="timeline-role">Class X - Secondary Schooling</h4>
                <p className="timeline-inst">Nagarjuna Model School, Andhra Pradesh (95.83%)</p>
              </div>
              <span className="timeline-period">2021 – 2022</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;