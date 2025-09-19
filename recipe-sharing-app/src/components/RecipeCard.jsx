import React from 'react';
import FavoriteButton from './FavoriteButton';

const RecipeCard = ({ 
  recipe, 
  showFavoriteButton = true,
  onClick
}) => {
  const handleCardClick = () => {
    if (onClick) onClick(recipe);
  };

  return (
    <div className="recipe-card" onClick={handleCardClick}>
      {showFavoriteButton && (
        <div className="favorite-button-container">
          <FavoriteButton recipeId={recipe.id} />
        </div>
      )}
      
      <div className="recipe-image">
        {recipe.image ? (
          <img src={recipe.image} alt={recipe.title} />
        ) : (
          <div className="placeholder-image">
            <span>🍽️</span>
          </div>
        )}
      </div>
      
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <p className="recipe-description">{recipe.description}</p>
        
        <div className="recipe-meta">
          {recipe.cuisine && (
            <span className="cuisine-tag">{recipe.cuisine}</span>
          )}
          {recipe.cookingTime && (
            <span className="time-tag">⏱️ {recipe.cookingTime} min</span>
          )}
          {recipe.difficulty && (
            <span className="difficulty-tag">📊 {recipe.difficulty}</span>
          )}
        </div>
        
        {recipe.tags && recipe.tags.length > 0 && (
          <div className="recipe-tags">
            {recipe.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;