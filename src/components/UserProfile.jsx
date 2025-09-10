
import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '1px solid gray', 
      borderRadius: '8px', 
      padding: '15px', 
      margin: '15px', 
      maxWidth: '300px', 
      backgroundColor: '#f2f2f2',
      fontFamily: 'Verdana, sans-serif'
    }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span></p>
    </div>
  );
};

export default UserProfile;
