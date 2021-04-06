window.addEventListener('load', () => {
/* Add Hero Image */
    let apiURL = "https://aamott.github.io/week13/templesuites/js/temples2.json";

    fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);

        featuredEl = document.getElementById("hero");
        featuredIm = document.createElement("img");

        // Choose random featured temple
        temple = jsObject[Math.floor(Math.random() * jsObject.length)];
        featuredIm.src = temple.imageurl;
        
        description = document.createElement("div");
        description.classList.add("description");
        description.innerHTML = `
                        <p>The current president of the ${temple.name} is ${temple.presidents[temple.presidents.length - 1]}.<br>
                        This building stands at ${temple.address1}, ${temple.city} ${temple.state}</p>`;
        
        featuredEl.insertBefore(description, featuredEl.firstChild);
        featuredEl.insertBefore(featuredIm, description);
    });
});