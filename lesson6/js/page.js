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

    /******* Display alert on Saturday **********/
    if (today.getDay() == 6) {
        document.getElementById("alert").style.display="block";
    };
});