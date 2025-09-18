import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, filterRecipes } = useRecipeStore(state => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    filterRecipes: state.filterRecipes
  }));

  // Trigger filtering whenever the component mounts or search term changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div style={{ 
      marginBottom: '20px', 
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    }}>
      <h3 style={{ 
        margin: '0 0 15px 0', 
        color: '#495057',
        fontSize: '18px'
      }}>
        Search Recipes
      </h3>
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        alignItems: 'center'
      }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by recipe title or description..."
          style={{
            flex: 1,
            padding: '10px 15px',
            border: '2px solid #ced4da',
            borderRadius: '6px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => e.target.style.borderColor = '#007bff'}
          onBlur={(e) => e.target.style.borderColor = '#ced4da'}
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            style={{
              padding: '10px 15px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
          >
            Clear
          </button>
        )}
      </div>
      {searchTerm && (
        <p style={{ 
          margin: '10px 0 0 0', 
          fontSize: '14px', 
          color: '#6c757d',
          fontStyle: 'italic'
        }}>
          Searching for: "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default SearchBar;