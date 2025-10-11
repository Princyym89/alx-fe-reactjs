import { useParams, useNavigate } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulated blog posts data
  const posts = {
    '1': { title: 'Getting Started with React Router', content: 'React Router is a powerful library...' },
    '2': { title: 'Advanced Routing Techniques', content: 'Learn about nested routes, protected routes...' },
    '3': { title: 'Dynamic Routing in React', content: 'Dynamic routing allows you to create flexible URLs...' }
  };

  const post = posts[id];

  if (!post) {
    return (
      <div>
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate(`/blog/${parseInt(id) - 1}`)}>Previous Post</button>
        <button onClick={() => navigate(`/blog/${parseInt(id) + 1}`)} style={{ marginLeft: '10px' }}>Next Post</button>
      </div>
    </div>
  );
}

export default BlogPost;
