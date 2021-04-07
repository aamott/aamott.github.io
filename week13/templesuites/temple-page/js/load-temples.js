window.addEventListener('load', () => {
    /* Add Hero Image */
    let apiURL = "https://aamott.github.io/week13/templesuites/js/temples2.json";
    fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        // get a list of temple sections
        let templeEls = document.getElementById("templeDisplay").childNodes;

        templeEls.forEach(section => {
            jsObject.forEach(temple => {
                // get ID of each individual temple section
                let templeId = temple.name.toLowerCase().replaceAll(" ", "-");
                if (section.id == templeId) {

                    /******  Closures *********************/
                    // get and format temple closure dates
                    let closuresEl = document.createElement("section");
                    let closureOutput = "";
                    temple.closures.forEach(closure => {
                        closureOutput += `<li>${closure}</li>`;
                    })

                    closuresEl.innerHTML = `
                        <h4>Temple Closure Schedule</h4>
                        <ul>${closureOutput}</ul>`;

                    // add closures to temple
                    section.getElementsByClassName("closure-schedule")[0].appendChild(closuresEl);

                    /******  Weather *********************/
                    // get and format temple closure dates
                    let weatherEl = document.createElement("section");
                    const cityID = temple.weatherID;
                    const key = "352e0185b01df25e978724a23f97f5f6";
                    console.log(temple.weatherID);
                    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units=imperial&appid="+key;
                    
                    fetch(apiURL)
                    .then(response => response.json())
                    .then(jsObject => {
                        // console.log("TempleWeather: ", temple.name, jsObject);
             
                        // Today's Summary
                        const main = jsObject.main;
                        const weather = jsObject.weather;
                        weatherEl.innerHTML = 
                        `<h4>Current Conditions</h4>
                        <ul>
                            <li>${weather[0].description}</li>
                            <li>${Math.round(main.temp_max)} °F</li>
                            <li>${Math.round(main.humidity)}% humidity</li>
                            <li>${Math.round(jsObject.wind.speed)}mph winds</li>
                        </ul>`
                        // add closures to temple
                        section.getElementsByClassName("weather-summary")[0].appendChild(weatherEl);
                        // console.log(weatherEl)
                    });

                }
            });
        })

        // Choose random featured temple
        temple = jsObject[Math.floor(Math.random() * jsObject.length)];
        
    });
});