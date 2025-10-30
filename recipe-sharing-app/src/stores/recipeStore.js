// src/stores/recipeStore.js (Alternative version)
import { create } from 'zustand';

// Load favorites from localStorage
const loadFavorites = () => {
  try {
    const stored = localStorage.getItem('recipe-favorites');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Save favorites to localStorage
const saveFavorites = (favorites) => {
  try {
    localStorage.setItem('recipe-favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Failed to save favorites:', error);
  }
};

const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish', category: 'Italian', ingredients: ['pasta', 'eggs', 'cheese'] },
    { id: 2, title: 'Chicken Curry', description: 'Spicy Indian curry', category: 'Indian', ingredients: ['chicken', 'curry', 'spices'] },
    { id: 3, title: 'Chocolate Cake', description: 'Decadent dessert', category: 'Dessert', ingredients: ['flour', 'sugar', 'cocoa'] },
    { id: 4, title: 'Greek Salad', description: 'Fresh Mediterranean salad', category: 'Salad', ingredients: ['tomato', 'cucumber', 'feta'] },
    { id: 5, title: 'Beef Tacos', description: 'Mexican street food', category: 'Mexican', ingredients: ['beef', 'tortillas', 'spices'] },
  ],
  favorites: loadFavorites(), // Initialize with saved favorites
  recommendations: [],
  
  // Add a recipe to favorites
  addFavorite: (recipeId) => set(state => {
    if (state.favorites.includes(recipeId)) {
      return state; // Already in favorites
    }
    const newFavorites = [...state.favorites, recipeId];
    saveFavorites(newFavorites); // Save to localStorage
    return { favorites: newFavorites };
  }),
  
  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => {
    const newFavorites = state.favorites.filter(id => id !== recipeId);
    saveFavorites(newFavorites); // Save to localStorage
    return { favorites: newFavorites };
  }),
  
  // Check if a recipe is favorited
  isFavorite: (recipeId) => {
    return get().favorites.includes(recipeId);
  },
  
  // Generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    if (state.favorites.length === 0) {
      // If no favorites, show random recipes
      const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
      return { recommendations: shuffled.slice(0, 3) };
    }
    
    // Get categories and ingredients from favorites
    const favoriteCategories = [];
    const favoriteIngredients = [];
    
    state.favorites.forEach(favId => {
      const recipe = state.recipes.find(r => r.id === favId);
      if (recipe) {
        favoriteCategories.push(recipe.category);
        favoriteIngredients.push(...recipe.ingredients);
      }
    });
    
    // Find recipes with matching categories or ingredients
    const recommended = state.recipes
      .filter(recipe => !state.favorites.includes(recipe.id)) // Exclude favorites
      .map(recipe => {
        let score = 0;
        
        // Score based on category matches
        if (favoriteCategories.includes(recipe.category)) {
          score += 2;
        }
        
        // Score based on ingredient matches
        recipe.ingredients.forEach(ingredient => {
          if (favoriteIngredients.includes(ingredient)) {
            score += 1;
          }
        });
        
        return { ...recipe, score };
      })
      .filter(recipe => recipe.score > 0) // Only recipes with some match
      .sort((a, b) => b.score - a.score) // Sort by score descending
      .slice(0, 3); // Top 3 recommendations
    
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
