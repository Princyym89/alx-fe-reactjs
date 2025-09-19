import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import FavoriteButton from './FavoriteButton';

const RecommendationsList = () => {
  const { 
    recommendations, 
    favorites, 
    generateRecommendations 
  } = useRecipeStore(state => ({
    recommendations: state.recommendations,
    favorites: state.favorites,
    generateRecommendations: state.generateRecommendations
  }));

  // Generate recommendations when component mounts or favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  const refreshRecommendations = () => {
    generateRecommendations();
  };

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
        justifyContent: 'space-between',
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '2px solid #f8f9fa'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', marginRight: '10px' }}>✨</span>
          <h2 style={{ 
            margin: 0, 
            color: '#212529',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            Recommended for You
          </h2>
        </div>
        <button
          onClick={refreshRecommendations}
          style={{
            padding: '6px 12px',
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#138496'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#17a2b8'}
          title="Get new recommendations"
        >
          🔄 Refresh
        </button>
      </div>

      {recommendations.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px',
          color: '#6c757d'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>🔍</div>
          <h3 style={{ color: '#495057', margin: '0 0 10px 0' }}>
            Building your recommendations
          </h3>
          <p style={{ margin: '0 0 20px 0', lineHeight: '1.5' }}>
            Add some recipes to your favorites to get personalized recommendations!
          </p>
          <button
            onClick={refreshRecommendations}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Generate Recommendations
          </button>
        </div>
      ) : (
        <>
          <div style={{ 
            fontSize: '14px', 
            color: '#6c757d', 
            marginBottom: '20px',
            fontStyle: 'italic'
          }}>
            {favorites.length > 0 
              ? `Based on your ${favorites.length} favorite recipe${favorites.length > 1 ? 's' : ''}`
              : 'Popular recipes you might enjoy'
            }
          </div>
          
          <div style={{ display: 'grid', gap: '20px' }}>
            {recommendations.map(recipe => (
              <div 
                key={recipe.id} 
                style={{ 
                  border: '1px solid #e9ecef',
                  borderRadius: '10px',
                  padding: '20px',
                  backgroundColor: '#fefefe',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)'
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
                {recipe.score && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: '#ffc107',
                    color: '#212529',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 'bold'
                  }}>
                    ⭐ Match
                  </div>
                )}
                
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
                  Try This Recipe →
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecommendationsList;