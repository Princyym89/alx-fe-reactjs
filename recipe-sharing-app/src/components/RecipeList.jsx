import FavoriteButton from './FavoriteButton';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { 
    recipes, 
    filteredRecipes, 
    searchTerm, 
    initializeFiltered,
    filterRecipes 
  } = useRecipeStore(state => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    initializeFiltered: state.initializeFiltered,
    filterRecipes: state.filterRecipes
  }));

  // Initialize filtered recipes when component mounts or recipes change
  useEffect(() => {
    if (recipes.length > 0 && filteredRecipes.length === 0 && !searchTerm) {
      initializeFiltered();
    }
  }, [recipes, filteredRecipes, searchTerm, initializeFiltered]);

  // Use filtered recipes if searching, otherwise use all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes;
  const totalRecipes = recipes.length;
  const showingCount = displayRecipes.length;

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <h2 style={{ margin: 0 }}>Recipe List</h2>
        <div style={{ fontSize: '14px', color: '#6c757d' }}>
          {searchTerm ? (
            <span>
              Showing {showingCount} of {totalRecipes} recipes
              {showingCount === 0 && ' (no matches found)'}
            </span>
          ) : (
            <span>{totalRecipes} total recipes</span>
          )}
        </div>
      </div>

      {displayRecipes.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '2px dashed #dee2e6'
        }}>
          {searchTerm ? (
            <div>
              <h3 style={{ color: '#6c757d', margin: '0 0 10px 0' }}>No recipes found</h3>
              <p style={{ color: '#adb5bd', margin: 0 }}>
                Try searching with different keywords or 
                <button 
                  onClick={() => useRecipeStore.getState().setSearchTerm('')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#007bff', 
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: '0 5px'
                  }}
                >
                  clear the search
                </button>
                to see all recipes.
              </p>
            </div>
          ) : (
            <div>
              <h3 style={{ color: '#6c757d', margin: '0 0 10px 0' }}>No recipes available</h3>
              <p style={{ color: '#adb5bd', margin: 0 }}>Add some recipes to get started!</p>
            </div>
          )}
        </div>
      ) : (
        displayRecipes.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #e9ecef', 
            padding: '20px', 
            margin: '15px 0',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          }}
          >
            <h3 style={{ 
              margin: '0 0 10px 0',
              color: '#212529',
              fontSize: '20px'
            }}>
              {recipe.title}
            </h3>
            <p style={{ 
              margin: '0 0 15px 0',
              color: '#6c757d',
              lineHeight: '1.5',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {recipe.description}
            </p>
            <Link 
              to={`/recipe/${recipe.id}`}
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              View Details →
<div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginTop: '15px'
            }}>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                View Details →
              </Link>
              <FavoriteButton recipeId={recipe.id} size="small" />
            </div>