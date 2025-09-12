import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'navy',
      color: 'white',
      textAlign: 'center',
      padding: '20px 10px'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.6rem' }}>My Favorite Cities</h1>
      <p style={{ margin: '6px 0 0', opacity: 0.9 }}>A small demo with inline CSS</p>
    </header>
  );
};

export default Header;
