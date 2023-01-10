import React from "react";
import "./css/CityTemperature.css";
export default function CityTemperature() {
  return (
    <div className="city-temperature">
      <div className="curent-city">
        <span className="city-name" id="city">
          Talske
        </span>
        <span className="curent-temperature">
          <span id="temperature">15</span>
          <span className="units selectUnit"> °C </span>
        </span>
      </div>
    </div>
  );
}
