// src/__tests__/recipeStore.test.js
import useRecipeStore from '../store/recipeStore';

describe('Recipe Store - Favorites', () => {
  beforeEach(() => {
    // Reset store state before each test
    useRecipeStore.setState({
      recipes: [
        { id: 1, title: 'Test Recipe 1', cuisine: 'Italian' },
        { id: 2, title: 'Test Recipe 2', cuisine: 'Mexican' }
      ],
      favorites: []
    });
  });

  test('should add recipe to favorites', () => {
    const { addFavorite, favorites } = useRecipeStore.getState();
    
    addFavorite(1);
    
    expect(useRecipeStore.getState().favorites).toContain(1);
  });

  test('should remove recipe from favorites', () => {
    const { addFavorite, removeFavorite } = useRecipeStore.getState();
    
    addFavorite(1);
    removeFavorite(1);
    
    expect(useRecipeStore.getState().favorites).not.toContain(1);
  });

  test('should not add duplicate favorites', () => {
    const { addFavorite } = useRecipeStore.getState();
    
    addFavorite(1);
    addFavorite(1);
    
    const favorites = useRecipeStore.getState().favorites;
    expect(favorites.filter(id => id === 1)).toHaveLength(1);
  });
});