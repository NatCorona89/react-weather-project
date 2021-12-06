import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      Weather App
      <header className="App-header">
        <Weather city="New York" />
        <h3>Weather App</h3>
        <Footer />
      </header>
    </div>
  );
}
