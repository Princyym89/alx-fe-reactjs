import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Princess" age={24} bio="I love studying, traveling, and learning new things." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

