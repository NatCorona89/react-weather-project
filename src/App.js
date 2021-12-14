import React from "react";
import "./App.css";
import "./Footer.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <span className="open-source">
            This project was coded by Natalie Corona, is open-sourced on{" "}
          </span>
          <a
            href="https://github.com/NatCorona89/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          <span className="open-source">and hosted on </span>
          <a
            href="https://wizardly-thompson-80bb2a.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
