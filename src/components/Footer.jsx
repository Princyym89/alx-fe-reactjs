import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f7f7fb',
      textAlign: 'center',
      padding: '12px 10px',
      marginTop: '30px',
      borderTop: '1px solid #e5e7eb'
    }}>
      <p style={{ margin: 0, fontSize: '0.95rem' }}>
        © {new Date().getFullYear()} — Built with ❤️ and inline styles
      </p>
    </footer>
  );
};

export default Footer;
