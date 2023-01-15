import React from "react";
import "./css/CurentImg.css";

export default function CurentImg(props) {
  //   let weatherEmoji;
  //   switch (props.ic) {
  //     case "01":
  //       weatherEmoji = "☀️";
  //       break;
  //     case "02":
  //       weatherEmoji = "🌤";
  //       break;
  //     case "03":
  //       weatherEmoji = " 🌥";
  //       break;
  //     case "04":
  //       weatherEmoji = "☁️";
  //       break;
  //     case "09":
  //       weatherEmoji = "🌧";
  //       break;
  //     case "10":
  //       weatherEmoji = "🌦";
  //       break;
  //     case "11":
  //       weatherEmoji = "⛈";
  //       break;
  //     case "13":
  //       weatherEmoji = "❄️";
  //       break;
  //     case "50":
  //       weatherEmoji = "🌫";
  //       break;
  //     default:
  //       weatherEmoji = "💧";
  //   }
  return (
    <div className="cimg">
      <img src={props.icon} alt="weather in current city" />
    </div>
  );
}
