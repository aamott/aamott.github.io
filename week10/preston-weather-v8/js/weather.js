function calcWindchill(temp, windSpeed) {
    if (temp > 50 || windSpeed < 3) {
        return "N/A";
    }

    let windChill = Math.round(35.74 + 0.6215*temp - 35.75*windSpeed**0.16 + 0.4275*temp*windSpeed**0.16);

    return windChill  + "°F"
}

window.addEventListener('load', (event) => {
    // Weather Summary
    const cityID = "5604473";
    const units = "imperial";
    const key = "352e0185b01df25e978724a23f97f5f6";
    const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units="+units+"&appid="+key;

    fetch(apiURL)
        .then(response => response.json())
        .then(jsObject => {
            console.log(jsObject);

            // PREDICTION
            const main = jsObject.list[0].main;
            const weather = jsObject.list[0].weather;
            document.getElementById('current-temp').textContent = Math.round(main.temp);
            document.getElementById('condition').textContent = weather[0].description;
            document.getElementById('high-temp').textContent = Math.round(main.temp_max);
            // Relevant weather icon
            // const imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[0].weather[0].icon +".png";
            // const desc = jsObject.list[0].weather[0].description;
            // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
            // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
            // document.getElementById('icon').setAttribute('alt', desc);
        })

    // Windchill
    let temp = parseInt(document.getElementById("high-temp").innerText);
    let windSpeed = parseInt(document.getElementById("wind-speed").innerText);
    
    document.getElementById("wind-chill").innerText = calcWindchill(temp, windSpeed);
});