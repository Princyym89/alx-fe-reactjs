import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  // Existing state
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Existing actions
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { recipes: updatedRecipes };
  }),
  
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return { recipes: updatedRecipes };
  }),
  
  updateRecipe: (id, updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    return { recipes: updatedRecipes };
  }),
  
  setRecipes: (recipes) => set({ recipes }),
  
  // New search and filter actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // Automatically trigger filtering when search term changes
    get().filterRecipes();
  },
  
  filterRecipes: () => set((state) => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { filteredRecipes: filtered };
  }),
  
  // Initialize filtered recipes when recipes are loaded
  initializeFiltered: () => set((state) => ({
    filteredRecipes: state.recipes
  }))
}));

export default useRecipeStore;