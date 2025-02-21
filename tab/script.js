// List of websites and descriptions
const links = [
    // { url: 'https://www.coolmath4kids.com', description: 'Cool Math Games' },
    { url: 'https://www.nationalgeographic.com/kids', description: 'National Geographic Kids' },
    { url: 'https://www.funbrain.com', description: 'Funbrain Games' },
    // Add more links as needed
];

// Function to create and insert links into the HTML
function createLinks() {
    const linksList = document.getElementById('links-list');
    links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.description;
        listItem.appendChild(anchor);
        linksList.appendChild(listItem);
    });
}

// Call the function to create links when the page loads
createLinks();
