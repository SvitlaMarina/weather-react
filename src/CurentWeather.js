import React from "react";
import CityTemperature from "./CityTemperature";
import CurentImg from "./CurentImg";
import DescriptionHumidityWind from "./DescriptionHumidityWind";
import "./css/CurentWeather.css";
export default function CurentWeather() {
  return (
    <section className="curent">
      <CityTemperature city="Talske" temperature="12" />
      <div className="curent-img-weather">
        <CurentImg icon="01" />
        <DescriptionHumidityWind description="Clouds" humidity={78} wind={4} />
      </div>
    </section>
  );
}
