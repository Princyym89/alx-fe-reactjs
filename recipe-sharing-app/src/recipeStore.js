import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Pasta Carbonara', description: 'Classic Italian pasta with eggs, cheese, and bacon.' },
    { id: 2, title: 'Chocolate Cake', description: 'Rich and moist chocolate cake with frosting.' }
  ],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));
EOF