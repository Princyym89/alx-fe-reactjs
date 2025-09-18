import useRecipeStore from './recipeStore';

const FavoriteButton = ({ recipeId, size = 'medium' }) => {
  const { favorites, addFavorite, removeFavorite, generateRecommendations } = useRecipeStore(state => ({
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
    generateRecommendations: state.generateRecommendations
  }));

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
    // Regenerate recommendations when favorites change
    generateRecommendations();
  };

  const buttonStyles = {
    small: {
      padding: '5px 8px',
      fontSize: '12px',
      minWidth: '60px'
    },
    medium: {
      padding: '8px 12px',
      fontSize: '14px',
      minWidth: '80px'
    },
    large: {
      padding: '12px 20px',
      fontSize: '16px',
      minWidth: '120px'
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      style={{
        ...buttonStyles[size],
        backgroundColor: isFavorite ? '#dc3545' : '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px'
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = isFavorite ? '#c82333' : '#218838';
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = isFavorite ? '#dc3545' : '#28a745';
        e.target.style.transform = 'scale(1)';
      }}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <span style={{ fontSize: size === 'large' ? '18px' : '14px' }}>
        {isFavorite ? '❤️' : '🤍'}
      </span>
      {isFavorite ? 'Favorited' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;