const cityID = "5604473";
const units = "imperial";
const key = "352e0185b01df25e978724a23f97f5f6";
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units="+units+"&appid="+key;

fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);

        // PREDICTION
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
        // Relevant weather icon
        const imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[0].weather[0].icon +".png";
        const desc = jsObject.list[0].weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    })