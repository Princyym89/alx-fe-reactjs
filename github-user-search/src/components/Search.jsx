import { useState } from "react";
import { fetchUserDataAdvanced } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const data = await fetchUserDataAdvanced(username, location, minRepos);
      if (data.items.length === 0) setError(true);
      else setResults(data.items);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border rounded p-2"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="border rounded p-2"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
        />
        <input
          className="border rounded p-2"
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories (optional)"
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center">Looks like we cant find the user</p>}

      <div className="mt-4 grid gap-4">
        {results.map((user) => (
          <div key={user.id} className="border rounded p-4 flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <p className="font-bold">{user.login}</p>
              <p>{user.location || "No location"}</p>
              <p>Repos: {user.public_repos || "N/A"}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

