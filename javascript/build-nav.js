setup_nav_from_file = function() {
    current_path = window.location.pathname;

    nav_filename = "/html_modules/nav.htm";
    fetch(nav_filename)
        .then(response => response.text())
        .then(html => {
            // console.log(html);
            temp_container = document.createElement('div');
            temp_container.innerHTML = html;
            // navEl = temp_container.firstChild;
            navEl = temp_container.querySelector('nav');
            console.log(navEl);

            // get the body
            const body = document.querySelector('body');
            // append the nav to the beginning of the body
            body.insertBefore(navEl, body.firstChild);
        })
        .catch(error => console.log(error));
}



// wait until the page is loaded to add navigation
window.addEventListener('load', function() {
    setup_nav_from_file();
});
