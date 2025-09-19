import React from 'react';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';
import useRecipeStore from '../store/recipeStore';

const Dashboard = () => {
  const { favorites } = useRecipeStore();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Your Recipe Dashboard</h1>
        <p>Discover and manage your favorite recipes</p>
      </div>
      
      <div className="dashboard-content">
        <section className="recommendations-section">
          <RecommendationsList />
        </section>
        
        <section className="favorites-section">
          <FavoritesList />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;