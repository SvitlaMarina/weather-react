//import axios from "axios";
import "./css/styles.css";
import CurentWeather from "./CurentWeather";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CurentWeather />
      <p class="text-light text-center pb-3">
        This project was coded by{" "}
        <a
          href="https://github.com/SvitlaMarina/weather-react"
          title="GitHub Marina Khristian"
          class="text-light"
          target="_blank"
          rel="noreferrer">
          Marina Khrystyianyn
        </a>
      </p>
    </div>
  );
}
