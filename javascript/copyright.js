window.addEventListener( 'load', ( event ) => {
    const cry = document.querySelector( "#copyrightyear" );
    cry.textContent = new Date().getFullYear();
    
    // const lu = document.querySelector( "#lastupdated" );
    // lu.textContent = document.lastModified;
} )