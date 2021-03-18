import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {
  const [data, setdata] = useState()
  const [initial,setInitial]=useState('rangpur')
  const [search,setSearch]=useState('');
  useEffect(async()=>{
    const data= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=rangpur&appid=36322319baf21d82da4b8b8bdf9388b1`)
    setdata(data.data)
    console.log(data)
  },[initial])
const  setcity=(e)=>{
    if(e.key==='Enter'){
      setInitial(search)
    }
  }
  return (
    <>
    <div className="main-container">
        <input
          className="search"
          name="search"
          onChange={(e)=>setSearch(e.target.value)}
          onKeyPress={(e)=>setcity(e)}
        />
       {data && ( <div className="city">
            <h2>{data.name}</h2>
            <span>{data.sys.country}</span>
            <div className="city-temp">
              {data.main.temp}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src=""
                alt="icon"
              />
              <p>{data.weather[0].main}</p>
            </div>
          </div>)}
         
        
      </div>
    </>
  );
};

export default App;
