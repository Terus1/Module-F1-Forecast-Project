import React, {useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import "../styles/Forecast5Days.css"


function Forecast5Days() {
  const REACT_APP_API_KEY = "0bdc4cda538a0bfb9dc497dbda72e330"
  const [city, setCity] = useState("")  // Записывается город
  const [forecast, setForecast] = useState([])   // Температура на текущий день
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${REACT_APP_API_KEY}`

  const handleInputChange = (e) => {      // В эту функцию я ввожу название города
    setCity(e.target.value)
  }

  const handleSelectChange = (e) => {     // В этой функции я выбераю название города
    setCity(e.target.value)
  }

  const getWeather = () => {
    axios.get(apiUrl).then((res) => {
      const forecastData = res.data.list.filter((item, index) => index % 8 === 0); // get every 8th item (every 3 hours) for 5 days
      setForecast(forecastData);
      console.log(forecastData);
    }).catch((error) => {
      console.log(error)
    })
  }



  return (

    <div>
      <i className={"head-5days"}>Прогноз погоды на 5 дней</i>
      <div className={"content-5days"}>
      <input className={"input-city"} type="text" placeholder="Введите название города" value={city}
             onChange={handleInputChange}/>
      <Button variant="primary" onClick={getWeather} className={'button-5days'}>Получить прогноз</Button>
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


      {forecast &&
        forecast.map((item, index) => (
          <p key={index} className={"result-5days"}>
            <b className={"b-tag"}>Дата: {new Date(item.dt * 1000).toLocaleDateString()}.</b><br/> <b>Температура:</b> {item.main.temp}°C.
            <b> Ощущается как:</b> {item.main.feels_like}°C. <b> Общее состояние погоды:</b> {item.weather[0]["description"]}

          </p>
        ))}
      </div>
    </div>
  )
}

export default Forecast5Days;
