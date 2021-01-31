window.addEventListener('load', () => {
    const menubutton = document.querySelector('#menu-icon');
    const mainnav = document.querySelector('#navigation');

    menubutton.addEventListener("click", ()=>{ mainnav.classList.toggle("responsive"); }, false);

    window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove("responsive"); }
});