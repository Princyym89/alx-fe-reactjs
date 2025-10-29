import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          GitHub User Search
        </h1>
        <p className="text-gray-600 mt-2">
          Search for GitHub users and view their profiles
        </p>
      </header>

      {/* Search Component */}
      <main className="max-w-3xl mx-auto">
        <Search />
      </main>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500 text-sm">
        © 2025 GitHub User Search App
      </footer>
    </div>
  );
}

export default App;

