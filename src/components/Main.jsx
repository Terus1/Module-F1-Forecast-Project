import React, {useState} from "react";
import "../styles/Main.css"
import ForecastCurrentDay from "./ForecastCurrentDay";
import Forecast5Days from "./Forecast5Days";


// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}    // прогноз погоды на 4 дня с данными каждый час

function Main() {
  return (
    <main>
      <ForecastCurrentDay />
      <hr/>
      <Forecast5Days />

    </main>
  )
}

export default Main;
