import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Inputs from './Components/Inputs';



function App() {

const [airdata, setAirdata] = useState('');
const [lat,setLat] = useState(0);
const [long, setLong] = useState(0);

const airUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=1df92bedf5694a811bb258ae1d8d608c`
// const searchLatLong = (event) => {
//     axios.get(airUrl).then((response) => {
//       setAirdata(response.data);
//       console.log(response.data)
//     });
//     // setLocation('')
// }

useEffect(() => {
  axios.get(airUrl).then((response) => {
    setAirdata(response.data);
    console.log(lat)
  });
}, []);

// console.log(airdata)

const [data,setData] = useState({});
const [location, setLocation] = useState('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1df92bedf5694a811bb258ae1d8d608c`

const searchLoacation = (event) => {
    if (event.key === `Enter`)
    {
      axios.get(url).then((response) => {
        setData(response.data);
        // console.log(response.data)
      });
      setLocation('')

    }
}
  return (
    <div className="App">

    <div>fromAddress</div>

    <div className = "mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
    <input className = "weather-search"
      value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress={searchLoacation}
      type = "text"/> 

<div>
        <h1 className = "main-name"> 
          {data.name}
          {data.sys ? <div>
            <p>{data.sys.country}</p>
          </div>:null}
        </h1>
        
        <div className='middle'>
        {data.main ?<div > 
          <p className="temp">{data.main.temp} °F</p>
          </div>: null}
          
          {data.weather ?<div className='mid-rd'> 
          <p className="rain">{data.weather[0].main}</p>
          <p className="desc">{data.weather[0].description}</p>
          </div>: null}

          </div>


          {data.main ?<div > 
          <div className= "hum-main">
          <div className= "pre-hu">
          <p className='pre'>{data.main.pressure}</p>
          <p className='hum'>{data.main.humidity}</p>
          {data.wind ? <p className= "wind">{data.wind.speed}</p>: null}
          </div>
          <div className= "pre-hu-des">
          <p className='pre-des'>Pressure</p>
          <p className='hum-des'>Humidity</p>
          <p className='wind-des'>Wind-Speed</p>

          </div>
          </div>

         </div>: null}
      
      </div> 




      <input 
      value={lat}
      onChange={event => setLat(event.target.value)}
      type = "text"/> 

      <input 
      value={long}
      onChange={event => setLong(event.target.value)} 
      type = "text"/> 

    </div>
    
    {/* <div className="bg-blue-500 w-64 h-32 flex justify-center items-center"><p className="text-white font-semibold">This is a rectangle box</p></div> */}

      {/* <input
      value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress={searchLoacation}
      type = "text"/> */}
      {/* <div>
        <p>
          {data.name}
        </p>
        
        {data.main ?<div> 
          <p>Temperature: {data.main.temp}</p>
          <p>Pressure: {data.main.pressure}</p>
          <p>Humidity: {data.main.humidity}</p>

         </div>: null}
        
        {data.sys ? <div>
            <p>Country: {data.sys.country}</p>
        </div>:null

        }
      
      </div> */}
    </div>
  );
}

export default App;
