import React,{ useState} from 'react'

export default function Weather({data}) {
    console.log(data,'ppp')
   
  
    return (
        <div className="main-container">
        {/* <input
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
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="icon"
              />
              <p>{data.weather[0].main}</p>
            </div>
          </div>)}
          */}
        
      </div>
    )
}
