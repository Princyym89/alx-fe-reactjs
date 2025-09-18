import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetails from './components/RecipeDetails';
import FavoritesPage from './components/FavoritesPage';
import AddRecipeForm from './components/AddRecipeForm';
import SampleDataLoader from './components/SampleDataLoader';
import useRecipeStore from './components/recipeStore';
import './App.css';

function App() {
  const favorites = useRecipeStore(state => state.favorites);
  
  return (
    <Router>
      <div className="App">
        <SampleDataLoader />
        <header style={{ 
          backgroundColor: '#343a40', 
          padding: '20px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <Link 
                to="/" 
                style={{ 
                  textDecoration: 'none',
                  color: '#ffffff'
                }}
              >
                <h1 style={{ 
                  margin: 0, 
                  fontSize: '28px',
                  fontWeight: 'bold'
                }}>
                  🍽️ Recipe Sharing App
                </h1>
              </Link>
              <p style={{ 
                margin: '5px 0 0 0', 
                color: '#adb5bd',
                fontSize: '14px'
              }}>
                Discover, share, and manage your favorite recipes
              </p>
            </div>
            
            <nav>
              <Link 
                to="/favorites"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#c82333';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#dc3545';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                ❤️ My Favorites
                {favorites.length > 0 && (
                  <span style={{
                    backgroundColor: 'white',
                    color: '#dc3545',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {favorites.length}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        </header>
        
        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;