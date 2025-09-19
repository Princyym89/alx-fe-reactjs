import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import FavoriteButton from './FavoriteButton';

const FavoritesList = () => {
  const { favorites, recipes } = useRecipeStore(state => ({
    favorites: state.favorites,
    recipes: state.recipes
  }));

  // Get the actual recipe objects for favorited recipe IDs
  const favoriteRecipes = favorites
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean); // Filter out any undefined recipes

  return (
    <div style={{ 
      backgroundColor: '#fff', 
      borderRadius: '12px', 
      padding: '25px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e9ecef'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '2px solid #f8f9fa'
      }}>
        <span style={{ fontSize: '24px', marginRight: '10px' }}>❤️</span>
        <h2 style={{ 
          margin: 0, 
          color: '#212529',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          My Favorites
        </h2>
        <span style={{ 
          marginLeft: 'auto', 
          backgroundColor: '#dc3545', 
          color: 'white',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {favoriteRecipes.length}
        </span>
      </div>

      {favoriteRecipes.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px',
          color: '#6c757d'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>🍽️</div>
          <h3 style={{ color: '#495057', margin: '0 0 10px 0' }}>
            No favorite recipes yet
          </h3>
          <p style={{ margin: '0 0 20px 0', lineHeight: '1.5' }}>
            Start exploring recipes and click the heart button to add your favorites here!
          </p>
          <Link 
            to="/"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
          >
            Browse Recipes
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {favoriteRecipes.map(recipe => (
            <div 
              key={recipe.id} 
              style={{ 
                border: '1px solid #e9ecef',
                borderRadius: '10px',
                padding: '20px',
                backgroundColor: '#fefefe',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '12px'
              }}>
                <h3 style={{ 
                  margin: 0, 
                  color: '#212529',
                  fontSize: '20px',
                  flex: 1,
                  marginRight: '15px'
                }}>
                  {recipe.title}
                </h3>
                <FavoriteButton recipeId={recipe.id} size="small" />
              </div>
              
              <p style={{ 
                margin: '0 0 15px 0',
                color: '#6c757d',
                lineHeight: '1.6',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {recipe.description}
              </p>
              
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
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
                View Recipe →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;