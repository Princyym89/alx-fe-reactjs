import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PostsComponent from './components/PostsComponent';
import HomeComponent from './components/HomeComponent';
import './App.css';

const queryClient = new QueryClient();

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Demo</h1>
        
        <nav style={{ marginBottom: '20px' }}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: currentPage === 'home' ? '#28a745' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('posts')}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: currentPage === 'posts' ? '#28a745' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Posts
          </button>
        </nav>

        {currentPage === 'home' ? <HomeComponent /> : <PostsComponent />}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
