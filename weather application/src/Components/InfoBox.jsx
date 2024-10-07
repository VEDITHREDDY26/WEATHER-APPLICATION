import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "../Styles/InfoBox.css"

function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1546274527-9327167dc1f5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D ";
    const COLD_URL="https://images.unsplash.com/photo-1675711524196-23dedd70d3f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8 ";
    const RAIN_URL  = " https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    // let info={
    //     city:"Delhi",
    //     feelslike : 24.84,
    //     temp : 25.05,
    //     tempMin : 25.05,
    //     tempMax:25.05,
    //     humidity:47,
    //     weather:"haze"
    // };
  return (
    <div className='parentdiv'>
        <Card sx={{ maxWidth: 345 }}>       
      <CardMedia
        sx={{ height: 140, width:400 }}
       
        image={info.humidity > 80 ? RAIN_URL : info.temp>15 ?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>
            Temperature = {info.temp}&deg;C;
         </div>
         <p>Humidity = {info.humidity} </p>
         <p>Weather = {info.weather}</p>
         <p>Temperature Minimum = {info.tempMin}&deg;C;</p>
         <p>temperature Maximum = {info.tempMax}&deg;C;</p>
        <p>Feels Like = {info.feelslike}&deg;C</p>
        
        </Typography>
      </CardContent>
      
    </Card>    
    </div>
  )
}

export default InfoBox
