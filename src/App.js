import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="New York" />
        <h3>Weather App</h3>
        <Footer />
      </header>
    </div>
  );
}
export default App;
