window.addEventListener('load', () => {
    /* Dropdown Menu */
    const menubutton = document.querySelector('#menu-icon');
    const mainnav = document.querySelector('#navigation');

    menubutton.addEventListener("click", ()=>{ mainnav.classList.toggle("responsive"); console.log("Menu click"); }, false);

    window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove("responsive"); if (window.innerWidth < 760) mainnav.classList.add("responsive");}

    /* Underline current page -- based on: https://stackoverflow.com/questions/6964503/using-javascript-to-highlight-current-page-in-navbar */
    let url = location.href.split("/");
    let navLinks = document.getElementById("navigation").getElementsByTagName("a");
    let currentPage = url[url.length - 1];
    
    for (let i = 0; i < navLinks.length; i++) {
        let lb = navLinks[i].href.split("/");
        if (lb[lb.length-1] == currentPage) {
            navLinks[i].className = "current";
            break;
        }
    }
});