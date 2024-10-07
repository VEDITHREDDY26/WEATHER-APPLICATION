import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import SearchBox from './Components/SearchBox';
import InfoBox from './Components/InfoBox';

import WeatherApp from './Components/WeatherApp';


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <WeatherApp/>
    </>
  )
}

export default App
