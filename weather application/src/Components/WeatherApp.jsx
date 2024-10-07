import React, { useState } from 'react';
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import "../Styles/WeatherApp.css"



function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState(
        {
         city:"Delhi",
        feelslike : 24.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze"
        }
    );

    let updateInfo =(newinfo)=>{
        setWeatherInfo(newinfo);
    }
  return (
    <div>
      <h2>CHECK YOUR WEATHER </h2>
      <SearchBox updateinfo = {updateInfo}/>
      <br />
      <br />
      <InfoBox info ={weatherInfo}/>

    </div>
  )
}

export default WeatherApp
