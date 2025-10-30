import React from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const { recipes, addFavorite, isFavorite } = useRecipeStore();

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>
      <div className="recipes-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="recipe-category">{recipe.category}</div>
            <button 
              onClick={() => addFavorite(recipe.id)}
              className={isFavorite(recipe.id) ? 'favorited' : ''}
              disabled={isFavorite(recipe.id)}
            >
              {isFavorite(recipe.id) ? 'Already Favorited' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;