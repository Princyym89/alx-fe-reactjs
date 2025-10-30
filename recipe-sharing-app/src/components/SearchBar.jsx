import React from 'react';
import useRecipeStore from '../stores/recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore();
  
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;