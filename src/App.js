import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <UserProfile
        name="Princess Matsobe"
        age="29"
        bio="Aspiring developer, lifelong learner, and Virtual Assistant."
      />
      <MainContent />
      <Footer />

      <div className="App" style={{ marginTop: '30px' }}>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </div>
  );
}

export default App;

