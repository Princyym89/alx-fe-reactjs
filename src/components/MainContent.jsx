import React from 'react';

const MainContent = () => {
  return (
    <main style={{ 
      padding: '20px', 
      backgroundColor: '#e6f7ff', 
      minHeight: '200px', 
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      fontFamily: 'Tahoma, sans-serif'
    }}>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Welcome to the main content section! Here you can add information about your favorite cities or any other content.
      </p>
    </main>
  );
};

export default MainContent;
