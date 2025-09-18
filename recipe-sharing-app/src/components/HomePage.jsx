import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';
import SearchBar from './SearchBar';

const HomePage = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <main style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '400px' }}>
          <AddRecipeForm />
        </div>
        <div style={{ flex: '1', minWidth: '400px' }}>
          <SearchBar />
          <RecipeList />
        </div>
      </main>
    </div>
  );
};

export default HomePage;