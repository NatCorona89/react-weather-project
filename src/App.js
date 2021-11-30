import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="New York" />
        <h1>Weather App</h1>
      </header>
    </div>
  );
}
export default App;
