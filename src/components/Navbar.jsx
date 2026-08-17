import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ theme, toggleTheme }) {
    return (
        <header className="site-header">
            <nav className="navbar">
                <NavLink to="/" className="brand">
                    Sai Jaswanth Vankadara
                </NavLink>

                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <button
                    type="button"
                    onClick={toggleTheme}
                    title="Toggle Dark/Light Theme"
                    style={{
                        padding: '0.4rem 0.85rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-accent)',
                        color: 'var(--text-main)',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                    }}
                >
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </nav>
        </header>
    );
}

export default Navbar;