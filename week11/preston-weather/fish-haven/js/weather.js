function calcWindchill(temp, windSpeed) {
    if (temp > 50 || windSpeed < 3) {
        return "N/A";
    }

    let windChill = Math.round(35.74 + 0.6215*temp - 35.75*windSpeed**0.16 + 0.4275*temp*windSpeed**0.16);

    return windChill;
}

window.addEventListener('load', (event) => {
    // Today's Weather Summary
    //TODO: Change City ID. Fish Haven not available from OpenWeatherMap API
    const cityID = "5604473"; //Preston ID 
    const units = "imperial";
    const key = "352e0185b01df25e978724a23f97f5f6";
    const todayURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units="+units+"&appid="+key;
    fetch(todayURL)
       .then(response => response.json())
       .then(jsObject => {
           console.log("Today: ",jsObject);

           // Today's Summary
           const main = jsObject.main;
           const weather = jsObject.weather;
           document.getElementById('condition').textContent = weather[0].description;
           document.getElementById('high-temp').textContent = Math.round(main.temp_max) + " °F";
           document.getElementById('humidity').textContent = Math.round(main.humidity) + '%';
           document.getElementById('wind-speed').textContent = Math.round(jsObject.wind.speed) + " mph";
       });
    // Five Day Forecast
   const fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units="+units+"&appid="+key;
   
   fetch(fiveDayURL)
       .then(response => response.json())
       .then(jsObject => {
           console.log("Five Day: ", jsObject);

           // Five Day Forecast
           const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
           let prev_day = new Date(jsObject.list[0].dt_txt);//today;
           for (let i = 1; i < 40; i++) {

               // Run once for every day
               let day = new Date(jsObject.list[i].dt_txt);
               if ((day.getHours()+1) % 19 ==0) { // 0 modulus anything is 0, so +1 makes it never 0
   
                   //daily forecast body
                   let forecastBody = document.createElement("section");
                   forecastBody.classList.add("day");
                   forecastBody.innerHTML = 
                   `<h3>${dayNames[day.getDay()]}</h3>
                   <img src="https://openweathermap.org/img/wn/${jsObject.list[i].weather[0].icon}.png" width=80px height=80px>
                   <p>${Math.round(jsObject.list[i].main.temp)} °F</p>
                   <p class="description">${jsObject.list[i].weather[0].description}</p>`;
   
                   document.getElementById("forecast").append(forecastBody);
   
                   //Advance day
                   prev_day = new Date(day);
               }
           }
       })
        .then(() => {
            // Windchill
            let temp = parseInt(document.getElementById("high-temp").innerText);
            let windSpeed = parseInt(document.getElementById("wind-speed").innerText);
            
            let windChill = calcWindchill(temp, windSpeed)
            document.getElementById("wind-chill").innerText = windChill + ((windChill == "N/A") ? "" : " °F");
    })
});