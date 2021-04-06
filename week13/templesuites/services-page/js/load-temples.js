window.addEventListener('load', () => {
    /* Add Hero Image */
    let apiURL = "https://aamott.github.io/week13/templesuites/js/temples2.json";
    fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        let templeEls = document.getElementById("templeDisplay").childNodes;
        // TODO: Get temple closure schedule from JSON
        templeEls.forEach(section => {
            jsObject.forEach(temple => {
                let templeId = temple.name.toLowerCase().replaceAll(" ", "-");
                if (section.id == templeId) {

                    // get and format closures
                    let closuresEl = document.createElement("section");
                    
                    let closureOutput = "";
                    temple.closures.forEach(closure => {
                        closureOutput += `<p>${closure}</p>`;
                    })

                    closuresEl.innerHTML = `
                        <h4>Temple Closure Schedule</h4>
                        ${closureOutput}`;

                    // add closures to temple
                    section.appendChild(closuresEl);
                    console.log(closuresEl)
                }
            });
        })

        // Choose random featured temple
        temple = jsObject[Math.floor(Math.random() * jsObject.length)];
        
    });
});