import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/profile');
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isAuthenticated ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to access protected routes.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
