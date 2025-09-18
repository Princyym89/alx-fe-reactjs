import { Link } from 'react-router-dom';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

const FavoritesPage = () => {
  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '2px solid #e9ecef'
      }}>
        <div>
          <h1 style={{ 
            margin: '0 0 10px 0', 
            color: '#212529',
            fontSize: '32px',
            fontWeight: 'bold'
          }}>
            Your Recipe Collection
          </h1>
          <p style={{ 
            margin: 0, 
            color: '#6c757d',
            fontSize: '16px'
          }}>
            Manage your favorite recipes and discover new ones
          </p>
        </div>
        
        <Link 
          to="/"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#0056b3';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#007bff';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ← Browse All Recipes
        </Link>
      </div>

      <div style={{ 
        display: 'grid', 
        gap: '30px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
      }}>
        <FavoritesList />
        <RecommendationsList />
      </div>
    </div>
  );
};

export default FavoritesPage;