import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <section style={{ textAlign: 'center', padding: '5rem 1.5rem' }}>
            <h1 style={{ fontSize: '4rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>404</h1>
            <h2>Page Not Found</h2>
            <p style={{ margin: '1rem 0 2rem', color: 'var(--text-muted)' }}>Oops! The page you are looking for does not exist or has been moved.</p>
            <Link to="/" className="btn-submit" style={{ textDecoration: 'none' }}>
                &larr; Back to Home Page
            </Link>
        </section>
    );
}

export default NotFoundPage;