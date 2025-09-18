import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Recipe Not Found</h2>
        <button onClick={() => navigate('/')} style={{ padding: '10px 20px' }}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate('/')} 
        style={{ 
          padding: '8px 16px', 
          marginBottom: '20px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back to Home
      </button>
      
      <div style={{ 
        border: '2px solid #e0e0e0', 
        borderRadius: '8px', 
        padding: '20px',
        backgroundColor: '#fafafa'
      }}>
        <h1 style={{ color: '#333', marginBottom: '15px' }}>{recipe.title}</h1>
        <p style={{ 
          fontSize: '16px', 
          lineHeight: '1.6', 
          color: '#666',
          marginBottom: '30px'
        }}>
          {recipe.description}
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          flexWrap: 'wrap',
          borderTop: '1px solid #e0e0e0',
          paddingTop: '20px'
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h3>Edit Recipe</h3>
            <EditRecipeForm recipe={recipe} />
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start',
            paddingTop: '30px'
          }}>
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;