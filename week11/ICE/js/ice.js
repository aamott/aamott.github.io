window.addEventListener('load', () => {
    const calURL = "http://www.ahfx.com/events.php"

    const months = [ 
        "January", "February", "March", "April", "May",  
        "June", "July", "August", "September", "October", "November", "December" ];

    fetch(calURL)
        .then(response => response.json())
        .then(jsObject => {
            console.log(jsObject);

            jsObject.forEach(event => {
                let display = document.createElement("section");
                display.classList.add("event");

                let data = event.properties;
                let start = new Date(data.start)
                startTime = start.toLocaleTimeString();
                let end = new Date(data.end)
                endTime = end.toLocaleTimeString();

                display.innerHTML = 
                    `<section class="date">
                        <h6 class="year">${start.getFullYear()}</h6>
                        <h2 class="day">${start.getDay() + 1}</h2>
                        <h6 class="month">${months[start.getMonth() + 1]}</h6>
                    </section>
                    <h3 class="title">${data.name}</h3>
                    <h4 class="summary">${data.summary}</h4>
                    <p class="content"><i class="far fa-clock"></i> ${startTime.slice(0, -6)} ${startTime.substr(-2)} - ${endTime.slice(0, -6)} ${endTime.substr(-2)}</p> 
                    <p class="content"><i class="fas fa-map-marker-alt"></i> ${data.location}</p>
                    <p class="type">Event Organized By: ${data.organized_by}</p>
                    <p class="type">Event Type: ${event.type}</p>`

                document.getElementById("calendar").appendChild(display);
            })

        })
        
})