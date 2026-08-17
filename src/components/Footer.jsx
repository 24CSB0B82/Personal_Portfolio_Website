import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div>
        &copy; {new Date().getFullYear()} Sai Jaswanth Vankadara • <strong>NIT Warangal</strong>
      </div>

      <button type="button" onClick={scrollToTop} className="footer-btn-top">
        Back to top ↑
      </button>
    </footer>
  );
}

export default Footer;