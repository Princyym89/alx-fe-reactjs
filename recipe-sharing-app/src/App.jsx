import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetails from './components/RecipeDetails';
import SampleDataLoader from './components/SampleDataLoader';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SampleDataLoader />
        <header style={{ 
          backgroundColor: '#343a40', 
          padding: '20px', 
          textAlign: 'center',
          borderBottom: '3px solid #007bff',
          marginBottom: '0'
        }}>
          <h1 style={{ 
            margin: 0, 
            color: '#ffffff',
            fontSize: '28px',
            fontWeight: 'bold'
          }}>
            🍽️ Recipe Sharing Application
          </h1>
          <p style={{ 
            margin: '5px 0 0 0', 
            color: '#adb5bd',
            fontSize: '14px'
          }}>
            Discover, share, and manage your favorite recipes
          </p>
        </header>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;