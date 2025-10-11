import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav style={{ margin: '20px 0', padding: '10px', background: '#e0e0e0' }}>
        <Link to="details" style={{ marginRight: '10px' }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route index element={<p>Select a section from above.</p>} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
