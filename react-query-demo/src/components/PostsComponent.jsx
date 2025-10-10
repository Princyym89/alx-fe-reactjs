import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60000, // Data is fresh for 1 minute
    cacheTime: 300000, // Cache persists for 5 minutes
  });

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        <p>Error fetching posts: {error.message}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          style={{
            padding: '10px 20px',
            backgroundColor: isFetching ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isFetching ? 'not-allowed' : 'pointer',
            fontSize: '16px'
          }}
        >
          {isFetching ? 'Refetching...' : 'Refetch Posts'}
        </button>
      </div>

      <div>
        <h2>Posts ({data?.length || 0})</h2>
        {data?.slice(0, 10).map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
              {post.id}. {post.title}
            </h3>
            <p style={{ margin: 0, color: '#666' }}>{post.body}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
        <h3>React Query Features Demonstrated:</h3>
        <ul style={{ textAlign: 'left' }}>
          <li><strong>Caching:</strong> Data is cached for 5 minutes. Navigate away and return to see cached data.</li>
          <li><strong>Stale Time:</strong> Data stays fresh for 1 minute before refetching in background.</li>
          <li><strong>Refetch:</strong> Click the "Refetch Posts" button to manually update data.</li>
          <li><strong>Loading States:</strong> Shows loading indicator during initial fetch.</li>
          <li><strong>Error Handling:</strong> Displays error messages if fetch fails.</li>
        </ul>
      </div>
    </div>
  );
};

export default PostsComponent;
