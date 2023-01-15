import React, { useState } from "react";
import CityTemperature from "./CityTemperature";
import CurentImg from "./CurentImg";
import DescriptionHumidityWind from "./DescriptionHumidityWind";
import axios from "axios";
import "./css/CurentWeather.css";
export default function CurentWeather() {
  let city = `Talske`;
  let [weather, setWeather] = useState({
    temperature: 12,
    description: "clouds",
    humidity: 34,
    wind: 35,
    img: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
    ready: false,
  });

  function setCurrentWeather(response) {
    console.log(response.data);
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      img: response.data.condition.icon_url,
      ready: true,
    });
  }

  const key = `37febb05294o365efadt844fbb50ef35`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;

  if (weather.ready) {
    return (
      <section className="curent">
        <CityTemperature city={city} temperature={weather.temperature} />
        <div className="curent-img-weather">
          <CurentImg icon={weather.img} />
          <DescriptionHumidityWind
            description={weather.description}
            humidity={weather.humidity}
            wind={weather.wind}
          />
        </div>
      </section>
    );
  } else {
    axios.get(apiUrl).then(setCurrentWeather);
    return "Loading";
  }
}
