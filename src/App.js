import React, { useState } from "react";
import axios from "axios";
import "./css/styles.css";
import CurentWeather from "./CurentWeather";
import Futter from "./Futter";
import "bootstrap/dist/css/bootstrap.css";
import CurentData from "./CurentData";
export default function App() {
  let [city, setCity] = useState("Talske");
  let [weather, setWeather] = useState({ ready: false });
  const key = `37febb05294o365efadt844fbb50ef35`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;

  function setCurrentWeather(response) {
    console.log(response.data);
    setWeather({
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      img: response.data.condition.icon_url,
      ready: true,
    });
  }
  function search() {
    axios.get(apiUrl).then(setCurrentWeather);
  }

  function handelSubmit(event) {
    event.preventDefault();
    search();
  }
  function handelCityChange(event) {
    setCity(event.target.value);
  }
  function handlePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${key}`;
    search();
  }

  function curentCity() {
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  if (weather.ready) {
    return (
      <div className="App">
        <div className="header">
          <CurentData data={weather.data} />
          <div className="enter-city">
            <form className="enter-city" onSubmit={handelSubmit}>
              <div className="mb-1 mr-2 m-1">
                <input
                  type="text"
                  className="form-control border-info"
                  id="cityName"
                  placeholder="Enter you city"
                  onChange={handelCityChange}
                />
              </div>
              <input
                type="submit"
                className="btn btn-outline-primary border-info mb-2 m-1"
                id="submitCity"
                value="Search"
              />
              <button
                type="button"
                onClick={curentCity}
                className="btn btn-outline-success border-info mb-2 m-1">
                Curent
              </button>
            </form>
          </div>
        </div>
        <CurentWeather weather={weather} />
        <Futter />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
