import './App.css';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <UserProfile
        name="Princess Matsobe"
        age="29"
        bio="Aspiring developer, lifelong learner, and Virtual Assistant."
      />
      <MainContent />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;

