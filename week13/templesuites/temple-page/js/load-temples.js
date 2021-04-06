window.addEventListener('load', () => {
    /* Add Hero Image */
    let apiURL = "https://aamott.github.io/week13/templesuites/js/temples2.json";
    fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        let templeDisplay = document.getElementById("templeDisplay");
        
        // TODO: Get temple closure schedule from JSON
        jsObject.forEach(temple => {
            // let templeEl = document.createElement("div");
            // templeEl.innerHTML = 
            // `<img src="${temple.imageurl}">
            // <p>${temple.address1}</p>
            // <p>${temple.phone}</p>
            // <p>${temple.email}</p>`;
            // templeEl.loading = "lazy";
            // templeDisplay.append(templeEl);
        });

        // Choose random featured temple
        temple = jsObject[Math.floor(Math.random() * jsObject.length)];
        
    });
});