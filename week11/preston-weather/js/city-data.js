function addTownInfo(townName, townJSON, idName) {
    townJSON.forEach(town => {
        if (town.name.toLowerCase() == townName.toLowerCase()) {
            let summary = document.createElement('section');
            summary.classList.add("summary");

            // Motto
            let p = document.createElement('p');
            p.textContent = town.motto;
            console.log(town.motto);
            document.querySelector("#"+idName+" .hero-title").appendChild(p);

            // Year Founded
            let founded = document.createElement("p");
            founded.textContent = "Year Founded: " + town["yearFounded"];
            summary.appendChild(founded);

            // Population
            let population = document.createElement('p');
            population.textContent = "Population: " + town["currentPopulation"];
            summary.appendChild(population);

            // Average Rainfall
            let rainfall = document.createElement('p');
            rainfall.textContent = "Annual Rain Fall: " + town["averageRainfall"];
            summary.appendChild(rainfall);

            document.querySelector("#"+idName).appendChild(summary);
        }
    });
}

const townURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townURL)
.then( response => response.json())
.then(jsonObject => {
    const towns = jsonObject['towns'];

    // Preston
    addTownInfo("preston", towns, "preston");
    addTownInfo("soda springs", towns, "soda-springs");
    addTownInfo("Fish Haven", towns, "fish-haven");
})