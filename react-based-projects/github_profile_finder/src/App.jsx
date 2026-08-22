import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState("");
  const [data, setData] = useState("");

  const userInput = (e) => {
    setVal(e.target.value);
  };

  const search = async () => {
    const response = await fetch(`https://api.github.com/users/${val}`);
    const result = await response.json();
    setData(result);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>GitHub Profile Finder</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter Username"
            value={val}
            onChange={userInput}
          />

          <button type="button" onClick={search}>
            Search
          </button>
        </div>

        {data && (
          <div className="profile-card">
            <h2>{data.name || "No Name Found"}</h2>

            <p>
              <strong>Username:</strong> {data.login}
            </p>

            <p>
              <strong>Public Repositories:</strong> {data.public_repos}
            </p>

            <a href={data.html_url} target="_blank" rel="noreferrer">
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
