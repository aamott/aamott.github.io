window.addEventListener('load', () => {
    /* Add Hero Image */
    let apiURL = "https://aamott.github.io/week13/templesuites/js/temples2.json";
    fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        // get parent select input
        let locationSelect = document.getElementById("location");
            jsObject.forEach(temple => {
                let templeId = temple.name.toLowerCase().replaceAll(" ", "-");
                
                // create options
                let locationOption = document.createElement("option");
                locationOption.value = templeId;
                locationOption.innerHTML = temple.name;
                
                //append options
                locationSelect.appendChild(locationOption);
            });
    });
});