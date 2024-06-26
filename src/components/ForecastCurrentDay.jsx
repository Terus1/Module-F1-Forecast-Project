import React, {useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../styles/ForecastCurrentDay.css"



function ForecastCurrentDay() {
  const REACT_APP_API_KEY = "0bdc4cda538a0bfb9dc497dbda72e330"
  const [city, setCity] = useState("")  // Записывается город
  const [temperature, setTemperature] = useState({})   // Температура на текущий день
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${REACT_APP_API_KEY}`


  const handleInputChange = (e) => {      // В эту функцию я ввожу название города
    setCity(e.target.value)
  }

  const handleSelectChange = (e) => {     // В этой функции я выбераю название города
    setCity(e.target.value)
  }

  const getWeather = () => {
    axios.get(apiUrl).then((res) => {
      setTemperature({"temp": res.data.main.temp, "lon": res.data.coord.lon, "lat": res.data.coord.lat})
      // console.log("В переменной temparature -> ", {temperature} ,"longitude(долгота) = ", res.data.coord.lon, ", latitude(широта) = ", res.data.coord.lat)
      // console.log("В городе", res.data.name, res.data.main.temp.toFixed(1) + "°C.", "Общее состояние погоды", res.data.weather[0]["description"])
    }).catch((error) => {
      console.log(error)})
  }

  return (
    <div>
      <i className={"head-currentDay"}>Прогноз погоды на сегодня</i>

      <input className={"input-city"} type="text" placeholder="Введите название города" value={city}
             onChange={handleInputChange}/>
      <Button variant="primary" onClick={getWeather} className={"button-currentDay"}>Получить прогноз</Button>

      <select value={city} onChange={handleSelectChange}>
        <option value="Moscow">Москва</option>
        <option value="London">Лондон</option>
        <option value="Paris">Париж</option>
        <option value="Saint Petersburg">Санкт-Петербург</option>
        <option value="Dubai">Дубай</option>
        <option value="Hong Kong">Гонконг</option>
        <option value="Bangkok">Бангкок</option>
        <option value="Minsk">Минск</option>
        <option value="Warsaw">Варшава</option>
        <option value="Stockholm">Стокгольм</option>
      </select>

      {temperature &&
        <p className={"result-currentDay"}>
          В городе {city}: {temperature.temp}°C.
        </p>

      }

    </div>
  )
}

export default ForecastCurrentDay;

