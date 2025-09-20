import React, { useEffect } from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations, addFavorite } = useRecipeStore();
  
  // Generate recommendations when component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-list">
        <h2>Personalized Recommendations</h2>
        <p>No recommendations available. Add some favorites to get personalized suggestions!</p>
      </div>
    );
  }

  return (
    <div className="recommendations-list">
      <h2>Personalized Recommendations</h2>
      <div className="recipes-grid">
        {recommendations.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="recipe-category">{recipe.category}</div>
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