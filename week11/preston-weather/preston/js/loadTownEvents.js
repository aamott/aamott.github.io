const TownName = "Preston";
const townURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townURL)
.then( response => response.json())
.then(jsonObject => {
    const events = jsonObject['towns'];
    const outputEl = document.getElementById("upcoming-events");
    let output = `<h2>Upcoming Events:</h2><ul>`

    jsonObject['towns'].forEach(town => {
        if (town.name.toLowerCase() == TownName.toLowerCase()) {
            town.events.forEach(e => {
                output += `<li>${e}</li>`;
            });
    }});
    output += "</ul>";

    outputEl.innerHTML = output;
})