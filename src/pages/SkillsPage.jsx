import React from 'react';

function SkillsPage() {
  return (
    <div className="page-wrapper">
      <section>
        <span className="section-caption">Toolkit</span>
        <h2 className="section-title-large">TECHNICAL SKILLS</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
          Categorized programming languages, web development frameworks, databases, developer tools, and relevant coursework.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Languages</h3>
            <ul>
              <li>C++</li>
              <li>Java</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Material UI</li>
              <li>Vite</li>
              <li>Recharts</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Databases & Cloud</h3>
            <ul>
              <li>MongoDB</li>
              <li>MongoDB Atlas</li>
              <li>MySQL</li>
              <li>Oracle Database</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Developer Tools & Security</h3>
            <ul>
              <li>VSCode</li>
              <li>Linux</li>
              <li>Git & GitHub</li>
              <li>JWT & bcryptjs</li>
              <li>Axios & REST APIs</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Coursework</h3>
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Object Oriented Programming</li>
              <li>Operating Systems</li>
              <li>Database Management Systems</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Soft Skills & Interests</h3>
            <ul>
              <li>Problem Solving</li>
              <li>Time Management</li>
              <li>Team Collaboration</li>
              <li>Personal Investing</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;