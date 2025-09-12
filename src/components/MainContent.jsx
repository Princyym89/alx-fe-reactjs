import React from 'react';
import UserProfile from './UserProfile';

const MainContent = () => {
  const container = { padding: '20px', maxWidth: '900px', margin: '0 auto' };
  const listItem = { padding: '8px 0', borderBottom: '1px dashed #eee' };

  return (
    <main style={container}>
      <UserProfile
        name="Princess Matsobe"
        age={34}
        bio="Aspiring VA + Front-end developer. Loves Italy, learning, and building useful things."
      />

      <section style={{ marginTop: '18px' }}>
        <h3 style={{ marginBottom: '8px' }}>Cities I love</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={listItem}>Rome — history & food</li>
          <li style={listItem}>Sicily — landscapes & cuisine</li>
          <li style={listItem}>Amalfi Coast — views & sunsets</li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
