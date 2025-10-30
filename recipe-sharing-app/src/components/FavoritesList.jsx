import React from 'react';
import useRecipeStore from '../stores/recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore();
  
  // Get favorite recipes
  const favoriteRecipes = recipes.filter(recipe => 
    favorites.includes(recipe.id)
  );

  if (favoriteRecipes.length === 0) {
    return (
      <div className="favorites-list">
        <h2>My Favorites</h2>
        <p>You haven't added any favorites yet.</p>
      </div>
    );
  }

  return (
    <div className="favorites-list">
      <h2>My Favorites</h2>
      <div className="recipes-grid">
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="recipe-category">{recipe.category}</div>
            <button 
              onClick={() => removeFavorite(recipe.id)}
              className="remove-favorite-btn"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;