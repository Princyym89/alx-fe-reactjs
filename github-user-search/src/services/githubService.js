import axios from "axios";

// Fetch a single user (previous function)
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search using GitHub Search API
export const fetchUserDataAdvanced = async (username, location = "", minRepos = "") => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  const users = response.data.items;

  // Optional: fetch extra details for each user (location, public_repos)
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  return { items: detailedUsers };
};

