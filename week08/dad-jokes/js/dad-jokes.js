window.addEventListener('load', (event)=> {
    newJoke();
})

function newJoke() {
    const dad_id = document.getElementById('dad-joke');
    dad_id.innerHTML = "";
    dad_id.classList.remove('small');
    const joke = getDadJoke()
    .then(function(j){
        dad_id.innerHTML = j['joke'];
        if (j['joke'].length > 85){
            dad_id.classList.add('small');
        }
    })
    .catch(function(e){
        dad_id.innerHTML = e;
    })
}

async function getDadJoke() {
    const url = 'https://icanhazdadjoke.com';
    let h = new Headers({
        "Accept"                : "application/json",
        "User-Agent"          : "WDD-230-Test User Agent https://aamott.github.io"
    });
    const response = await fetch(url,{headers:h});
    if(response.status == 200) {
        return response.json();
    }
    else {
        throw new Error("No dad jokes found: " +response.status);
    }
}