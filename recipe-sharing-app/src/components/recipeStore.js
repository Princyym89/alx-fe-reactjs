import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Existing action
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  // New action for deleting recipes
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // New action for updating recipes
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  
  // Keep existing setRecipes action
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;