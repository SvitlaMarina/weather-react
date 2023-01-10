import React from "react";
import "./css/CurentImageWeather.css";
export default function CurentImageWeather() {
  return (
    <div className="curent-img-weather">
      <div className="curent-img">
        <span className="curent-img" id="curent-img">
          {" "}
          🌦{" "}
        </span>
      </div>
      <div className="curent-weather">
        <p id="clouds">Clouds</p>
        <p id="humidity">Humidity: 98%</p>
        <p id="wind">Wind:7 m/s</p>
      </div>
    </div>
  );
}
