import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations, addFavorite } = useRecipeStore();
  
  // Generate recommendations when component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-list">
        <h2>Recommended For You</h2>
        <p>We need more information to provide recommendations.</p>
      </div>
    );
  }

  return (
    <div className="recommendations-list">
      <h2>Recommended For You</h2>
      <div className="recommendations-grid">
        {recommendations.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button 
              onClick={() => addFavorite(recipe.id)}
              className="add-favorite-btn"
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;