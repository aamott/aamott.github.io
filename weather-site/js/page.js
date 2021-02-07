window.addEventListener('load', (event)=>{
    let dayName = { 
        weekday: 'long',
    }; 
    let monthName = {
        month: 'long',
    }; 

    let today = new Date();

    const lu = document.querySelector("#currentdate");
    lu.textContent= today.toLocaleString('en-US', dayName) + ", " 
        + today.getDay() + " " + today.toLocaleDateString('en-US', monthName) + " " + today.getFullYear();

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();
})

let dayName = { timeZone: "America/New_York", 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }; 
    let monthName = { timeZone: "America/New_York", 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        
    }; 