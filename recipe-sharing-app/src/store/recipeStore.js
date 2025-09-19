// src/store/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  // Existing state
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // New favorites and recommendations state
  favorites: [],
  recommendations: [],
  
  // Existing actions
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { recipes: updatedRecipes };
  }),
  
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    // Also remove from favorites if it was favorited
    const updatedFavorites = state.favorites.filter(favId => favId !== id);
    return { recipes: updatedRecipes, favorites: updatedFavorites };
  }),
  
  updateRecipe: (id, updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    return { recipes: updatedRecipes };
  }),
  
  setRecipes: (recipes) => set({ recipes }),
  
  // Existing search actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  
  filterRecipes: () => set((state) => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { filteredRecipes: filtered };
  }),
  
  initializeFiltered: () => set((state) => ({
    filteredRecipes: state.recipes
  })),
  
  // New favorites actions
  addFavorite: (recipeId) => set((state) => {
    // Don't add if already in favorites
    if (state.favorites.includes(recipeId)) {
      return state;
    }
    const updatedFavorites = [...state.favorites, recipeId];
    return { favorites: updatedFavorites };
  }),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // New recommendations actions
  generateRecommendations: () => set((state) => {
    // Enhanced recommendation algorithm
    const { recipes, favorites } = state;
    
    if (favorites.length === 0) {
      // If no favorites, recommend random recipes
      const shuffled = [...recipes].sort(() => 0.5 - Math.random());
      return { recommendations: shuffled.slice(0, 3) };
    }
    
    // Get favorite recipes to analyze preferences
    const favoriteRecipes = favorites
      .map(id => recipes.find(recipe => recipe.id === id))
      .filter(Boolean);
    
    // Extract keywords from favorite recipes for better recommendations
    const favoriteKeywords = favoriteRecipes
      .flatMap(recipe => [
        ...recipe.title.toLowerCase().split(' '),
        ...recipe.description.toLowerCase().split(' ')
      ])
      .filter(word => word.length > 3) // Filter out short words
      .reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {});
    
    // Score recipes based on keyword matches
    const scoredRecipes = recipes
      .filter(recipe => !favorites.includes(recipe.id)) // Exclude already favorited
      .map(recipe => {
        const recipeText = (recipe.title + ' ' + recipe.description).toLowerCase();
        let score = 0;
        
        Object.entries(favoriteKeywords).forEach(([keyword, frequency]) => {
          if (recipeText.includes(keyword)) {
            score += frequency;
          }
        });
        
        return { ...recipe, score };
      })
      .filter(recipe => recipe.score > 0)
      .sort((a, b) => b.score - a.score);
    
    // If no keyword matches, fall back to random selection
    const recommended = scoredRecipes.length > 0 
      ? scoredRecipes.slice(0, 3)
      : recipes
          .filter(recipe => !favorites.includes(recipe.id))
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
    
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;