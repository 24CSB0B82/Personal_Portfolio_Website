import React from 'react';
import ContactForm from '../components/ContactForm.jsx';

function ContactPage() {
  return (
    <div className="page-wrapper">
      <section className="contact-wrapper">
        <div className="contact-left-info">
          <span className="section-caption">Contact</span>
          <h2 className="section-title-large">REACH OUT ME</h2>

          <p style={{ marginBottom: '2rem' }}>
            Department of Computer Science and Engineering, National Institute of Technology, Warangal, Telangana, India.
          </p>

          <div className="contact-direct-items">
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block' }}>PHONE</span>
              <a href="tel:+917601014831" className="contact-direct-link">+91 7601014831</a>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block' }}>PERSONAL EMAIL</span>
              <a href="mailto:saijaswanthvankadara1901@gmail.com" className="contact-direct-link">saijaswanthvankadara1901@gmail.com</a>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block' }}>STUDENT EMAIL</span>
              <a href="mailto:vs24csb0b82@student.nitw.ac.in" className="contact-direct-link">vs24csb0b82@student.nitw.ac.in</a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            <a href="https://github.com/saijaswanthvankadara" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-dark)', textDecoration: 'none' }}>
              GITHUB ↗
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-dark)', textDecoration: 'none' }}>
              LINKEDIN ↗
            </a>
            <a href="mailto:saijaswanthvankadara1901@gmail.com" style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-dark)', textDecoration: 'none' }}>
              EMAIL ↗
            </a>
          </div>
        </div>

        {/* Right side contact form in light pastel gradient card */}
        <ContactForm />
      </section>
    </div>
  );
}

export default ContactPage;
