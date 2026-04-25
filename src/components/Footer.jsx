import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '2rem 0',
      marginTop: '4rem',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem'
        }}>
          Designed and built for software engineering applications.
        </p>
        <p style={{
          color: 'var(--text-primary)',
          fontWeight: '500',
          fontFamily: 'var(--font-serif)'
        }}>
          Dhruv Bisht © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
