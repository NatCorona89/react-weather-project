import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      Weather App
      <header className="App-header">
        <Weather city="New York" />
        <h3>Weather App</h3>
        <footer>
          <a
            href="https://github.com/NatCorona89/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open Source Code on GitHub
          </a>
          <div>by Natalie Gilliam ☁️</div>
        </footer>
      </header>
    </div>
  );
}
