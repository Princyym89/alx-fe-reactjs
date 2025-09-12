import React from 'react';

const UserProfile = ({ name = 'Jane Doe', age = 28, bio = 'Curious developer who loves travel.' }) => {
  const containerStyle = {
    border: '1px solid #ccc',
    padding: '14px',
    margin: '12px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
    backgroundColor: '#fff'
  };
  const nameStyle = { color: '#1e3a8a', fontSize: '1.25rem', margin: '0 0 8px 0' };
  const ageStyle = { fontWeight: '600' };
  const bioStyle = { marginTop: '8px', color: '#333', lineHeight: 1.4 };

  return (
    <div style={containerStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p style={{ margin: 0 }}>Age: <span style={ageStyle}>{age}</span></p>
      <p style={bioStyle}>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
