import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "../Styles/SearchBox.css";

function SearchBox({ updateinfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "8d617b29901ac51fb04b53a045454774";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);

      // Check if the response is OK (status code 200)
      if (response.status === 200) {
        let jsonResponse = await response.json();
        let result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelslike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
      } else {
        // If the status is not 200, handle it as an invalid city
        return { error: "Enter a valid place name" };
      }
    } catch (error) {
      console.error("Error fetching the weather data:", error);
      return { error: "An error occurred while fetching the weather data" };
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      console.log(city);
      let newinfo = await getWeatherInfo();
      updateinfo(newinfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
        >
          Send
        </Button>
        <br />
      </form>
    </div>
  );
}

export default SearchBox;
