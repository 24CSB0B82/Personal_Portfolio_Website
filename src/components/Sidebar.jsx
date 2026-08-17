import React from 'react';
import { NavLink } from 'react-router-dom';
import sjLogo from '../assets/sj_logo.svg';

function Sidebar({ theme, toggleTheme }) {
  return (
    <aside className="site-sidebar">
      <div className="sidebar-top">
        {/* Top Header Row Line: SJ Logo on left, FontAwesome Icon-only Theme Toggle on far right end */}
        <div className="sidebar-header-row">
          <NavLink to="/" className="sidebar-logo-link" title="Sai Jaswanth Vankadara">
            <img src={sjLogo} alt="SJ Side-by-Side Logo" className="sidebar-sj-logo" />
          </NavLink>

          <button
            type="button"
            onClick={toggleTheme}
            className="sidebar-theme-icon-btn"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Dark/Light Theme"
          >
            {theme === 'light' ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </button>
        </div>

        {/* Navigation Links with Strikethrough active style */}
        <nav className="sidebar-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')} end>
            HOME
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
            ABOUT
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
            SKILLS
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
            WORKS
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}>
            CONTACT
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-bottom">
        {/* Social Links with FontAwesome icons & Stylish White Borders */}
        <div className="sidebar-socials">
          <a
            href="https://github.com/saijaswanthvankadara"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-social-icon white-bordered"
            title="GitHub Profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-social-icon white-bordered"
            title="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:saijaswanthvankadara1901@gmail.com"
            className="sidebar-social-icon white-bordered"
            title="Email Direct"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <div className="sidebar-copyright">
          Copyright &copy; {new Date().getFullYear()} Sai Jaswanth Vankadara.<br />All rights reserved.
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
