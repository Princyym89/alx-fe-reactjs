import { useAuth } from './AuthContext';

function ProfileSettings() {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Profile Settings</h2>
      <p>Update your preferences here.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ProfileSettings;
