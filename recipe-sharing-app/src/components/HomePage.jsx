import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';

const HomePage = () => {
  return (
    <main style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div style={{ flex: 1 }}>
        <AddRecipeForm />
      </div>
      <div style={{ flex: 1 }}>
        <RecipeList />
      </div>
    </main>
  );
};

export default HomePage;