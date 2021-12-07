import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/NatCorona89/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code on GitHub
          </a>{" "}
          by Natalie Corona ☁️
        </footer>
      </div>
    </div>
  );
}
