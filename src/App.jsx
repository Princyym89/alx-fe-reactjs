import React from 'react';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Recipe Sharing App</h1>
      </header>
      <main className="app-main">
        <div className="content-section">
          <RecipeList />
        </div>
        <div className="sidebar">
          <FavoritesList />
          <RecommendationsList />
        </div>
      </main>
    </div>
  );
}

export default App;