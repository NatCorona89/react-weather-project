import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6458e738d641627494ff8c0b51ef5d37";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter A City" onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  render() {
    if (this.state.weather) {
      return (
        <div class="container">
          <div class="weather-app">
            <div class="card">
              <div class="card-body">
                <form class="search-form">
                  <div class="row">
                    <div class="col-6">
                      <div class="search-bar">
                        <input
                          type="search"
                          class="form-control"
                          placeholder="Enter a city"
                          autofocus="on"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="search-button">
                        <input
                          type="submit"
                          class="btn btn-white shadow-sm w-100"
                          value="Search"
                        />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="geo-button">
                        <button
                          class="btn btn-white shadow-sm w-100"
                        >
                          <img
                            src="images/geo-icon.png"
                            width="28px"
                            alt="geolocation icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <ul>
                </ul>
                <div class="emoji weather-temperature">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt="Clear"
                    width="150"
                  />
                  <span class="temperature" id="temperature"></span>
                  <span class="units">°F</span>
                </div>
                <br />
                <div class="row">
                  <div class="weather">
                    <div class="col-12">
                      Humidity: <span></span>
                    </div>
                    <div class="col-12">
                      Wind Speed: <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <strong>
                <hr />
              </strong>
              <form>
                <div class="weather-forecast"></div>
              </form>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-xs-12">
              <a
                href="https://github.com/NatCorona89/weather-project"
                target="_blank"
              >
                Open Source Code
              </a>

              <div class="name">by Natalie Gilliam ☁️</div>
            </div>
          </div>
        </div>
      );
      } else {
      return (
        <div>
          App is loading, <em>please wait...</em>
        </div>
      );
    }
  }
}