import React from "react";
import CityTemperature from "./CityTemperature";
import CurentImageWeather from "./CurentImageWeather";
//import "./css/CurentWeather.css";
export default function CurentWeather() {
  return (
    <section className="curent">
      <CityTemperature />
      <CurentImageWeather />
    </section>
  );
}
