import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./css/Forecast.css";
import axios from "axios";
//import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="card-group">
        {forecast.map(function (dailyForecast, index) {
          return <ForecastDay data={forecast[index]} />;
        })}
      </div>
    );
  } else {
    const key = `37febb05294o365efadt844fbb50ef35`;
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
    return <div>Loaded</div>;
  }
}
