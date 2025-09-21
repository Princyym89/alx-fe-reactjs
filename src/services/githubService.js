// src/services/githubService.js
import axios from 'axios';

// Function to fetch user data from GitHub API
const fetchUserData = async (username) => {
  try {
    // Make a GET request to the GitHub API endpoint for a specific user
    const response = await axios.get(`https://api.github.com/users/${username}`);
    // Return the data from the response
    return response.data;
  } catch (error) {
    // If an error occurs (e.g., user not found), throw it to be handled by the component
    throw error;
  }
};

// Export the function so it can be imported in components
export { fetchUserData };