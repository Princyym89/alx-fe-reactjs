import React from 'react';

const MainContent = () => {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#eef',
      minHeight: '200px'
    }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Welcome to My Favorite Cities App</h2>
      <p style={{ marginTop: '15px', lineHeight: '1.6' }}>
        This application highlights some of my favorite cities and gives a little insight
        about each one. Explore and enjoy!
      </p>
    </main>
  );
};

export default MainContent;

