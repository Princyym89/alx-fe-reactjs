import { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const SampleDataLoader = () => {
  const { recipes, addRecipe } = useRecipeStore(state => ({
    recipes: state.recipes,
    addRecipe: state.addRecipe
  }));

  useEffect(() => {
    // Only add sample data if no recipes exist
    if (recipes.length === 0) {
      const sampleRecipes = [
        {
          id: Date.now() + 1,
          title: "Classic Chocolate Chip Cookies",
          description: "Soft and chewy chocolate chip cookies made with butter, brown sugar, and vanilla. Perfect for any occasion and loved by kids and adults alike."
        },
        {
          id: Date.now() + 2,
          title: "Spaghetti Carbonara",
          description: "Traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper. A creamy and delicious comfort food that's ready in under 30 minutes."
        },
        {
          id: Date.now() + 3,
          title: "Chicken Tikka Masala",
          description: "Tender chicken pieces in a rich, creamy tomato-based sauce with aromatic Indian spices. Serve with basmati rice and naan bread for the complete experience."
        },
        {
          id: Date.now() + 4,
          title: "Fresh Garden Salad",
          description: "Crisp mixed greens with cherry tomatoes, cucumbers, carrots, and your choice of dressing. A healthy and refreshing meal that's perfect for lunch."
        },
        {
          id: Date.now() + 5,
          title: "Homemade Pizza Margherita",
          description: "Classic Italian pizza with fresh mozzarella, tomato sauce, and basil leaves. Made with hand-stretched dough and baked to perfection in a hot oven."
        }
      ];

      sampleRecipes.forEach(recipe => addRecipe(recipe));
    }
  }, [recipes, addRecipe]);

  return null; // This component doesn't render anything
};

export default SampleDataLoader;