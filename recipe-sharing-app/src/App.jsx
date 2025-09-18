import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing Application</h1>
      </header>
      <main style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <div style={{ flex: 1 }}>
          <AddRecipeForm />
        </div>
        <div style={{ flex: 1 }}>
          <RecipeList />
        </div>
      </main>
    </div>
  )
}

export default App