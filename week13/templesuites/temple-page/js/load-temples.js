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
                    console.log(closuresEl)
                }
            });
        })

        // Choose random featured temple
        temple = jsObject[Math.floor(Math.random() * jsObject.length)];
        
    });
});