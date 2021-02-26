function calcWindchill(temp, windSpeed) {
    if (temp > 50 || windSpeed < 3) {
        return "N/A";
    }

    let windChill = Math.round(35.74 + 0.6215*temp - 35.75*windSpeed**0.16 + 0.4275*temp*windSpeed**0.16);

    return windChill  + "°F"
}

window.addEventListener('load', (event) => {
    let temp = parseInt(document.getElementById("high-temp").innerText);
    let windSpeed = parseInt(document.getElementById("wind-speed").innerText);
    
    document.getElementById("wind-chill").innerText = calcWindchill(temp, windSpeed);
});