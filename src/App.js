import React from 'react'
const api = {
  key: "eeaf8e744af2612253d5824723f5b3cf",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
    const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
     "September", "October", "November", "December"];

     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     let day = days[d.getDay()];
     let date = d.getDate();
     let month = months[d.getMonth()];
     let year = d.getFullYear();

     return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text"
          className='search-bar'
          placeholder='search...' 
          />
        </div>
        <div className="location-box">
          <div className="location">Ibadan City, Nigeria</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
       <div className="weather-box">
        <div className="temp">
          15°C
        </div>
        <div className="weather">Sunny</div>
       </div>
       </main>
    </div>
  );
}

export default App;
