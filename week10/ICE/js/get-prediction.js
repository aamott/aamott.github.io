const cityID = "5604473";
const units = "imperial";
const key = "352e0185b01df25e978724a23f97f5f6";
const requestURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units="+units+"&appid="+key;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // TODAY
        //icon
        let icon = document.getElementById("icon");
        icon.src = "http://openweathermap.org/img/wn/" + jsonObject.list[0].weather[0].icon + ".png";

        //show city
        document.getElementById("city").innerText = jsonObject.city.name;
        //show date
        let today = new Date(jsonObject.list[0].dt_txt);
        console.log("Today is", today);
        document.getElementById('today').innerText = dayNames[today.getDay()];
        document.getElementById("date").innerText = today.toLocaleDateString()

        const currentTemp = Math.round(jsonObject.list[0].main.temp);
        document.getElementById('temp').textContent = currentTemp + "°F";

        // FORECAST LOOP
        let prev_day = today;
		for (let i = 1; i < 40; i++) {
			let day = new Date(jsonObject.list[i].dt_txt);
			if (day.getDay() != prev_day.getDay()) {

                //daily forecast body
                let forecastBody = document.createElement("section");
                forecastBody.classList.add("day");

                //forecast section
				let content = document.createElement("section");
                content.classList.add("forecast");

                // day name
                let dayName = document.createElement("h3");
				dayName.innerText = dayNames[day.getDay()];
				forecastBody.append(dayName);

                // icon
                let iconDisp = document.createElement("img");
                iconDisp.classList.add("daily-icon")
                iconDisp.src = "http://openweathermap.org/img/wn/" + jsonObject.list[i].weather[0].icon + ".png";
                content.append(iconDisp);

                // temp
				let tempDisp = document.createElement("p");
				tempDisp.innerText = Math.round(jsonObject.list[i].main.temp) + " °F";
				content.append(tempDisp);

                forecastBody.append(content);
                document.getElementById("daily").append(forecastBody);

                //Advance day
                prev_day = new Date(day);
			}
		}
    });