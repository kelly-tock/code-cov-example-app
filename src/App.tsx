import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h2>Add components here to see what happens to coverage!</h2>
        <ol>
          <li>Create a new component and add it to this page</li>
          <li>Commit that component and change to app in a PR.</li>
          <li>See the affect on code coverage</li>
          <li>Write a test for the component you added and update the PR</li>
          <li>See the affect on code coverage</li>
        </ol>
      </main>
    </div>
  );
}

export default App;
