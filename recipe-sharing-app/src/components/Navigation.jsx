import React from 'react';
import useRecipeStore from '../store/recipeStore';

const Navigation = ({ currentView, setCurrentView }) => {
  const { favorites } = useRecipeStore();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'all-recipes', label: 'All Recipes', icon: '📖' },
    { id: 'add-recipe', label: 'Add Recipe', icon: '➕' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h1>Recipe Share</h1>
      </div>
      
      <div className="nav-items">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`nav-item ${currentView === item.id ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
      
      <div className="nav-stats">
        <div className="favorites-count">
          ❤️ {favorites.length} favorites
        </div>
      </div>
    </nav>
  );
};

export default Navigation;