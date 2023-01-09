import axios from "axios";
//import "./css/styles.css";
import CurentWeather from "./CurentWeather";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CurentWeather />
    </div>
  );
}
