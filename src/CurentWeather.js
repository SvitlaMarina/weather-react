import React from "react";
import CityTemperature from "./CityTemperature";
import CurentImg from "./CurentImg";
import DescriptionHumidityWind from "./DescriptionHumidityWind";
import "./css/CurentWeather.css";
export default function CurentWeather(props) {
  return (
    <section className="curent">
      <CityTemperature
        city={props.weather.city}
        temperature={props.weather.temperature}
      />
      <div className="curent-img-weather">
        <CurentImg icon={props.weather.img} />
        <DescriptionHumidityWind
          description={props.weather.description}
          humidity={props.weather.humidity}
          wind={props.weather.wind}
        />
      </div>
    </section>
  );
}
