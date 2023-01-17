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

  const key = `37febb05294o365efadt844fbb50ef35`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
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
              {/* <button
                type="button"
                className="btn btn-outline-success border-info mb-2 m-1"
                id="enterCurentCity">
                Curent
              </button> */}
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
