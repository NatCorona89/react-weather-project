import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayWeather(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°F`
    );
  }
  let apiKey = "6458e738d641627494ff8c0b51ef5d37";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayWeather);
  return <h2>Hello from Weather</h2>;
}
