import './style.css';
import about from './about.js';
import contact from './contact.js';
import menu from './menu.js';

about(); // gotta properly say it's a function yeah.

// lets put a header with the name of the place
// lets put in an image

// let's call the diner the late night


const contactButton = document.createElement('button');
const aboutButton = document.createElement('button');
const menuButton = document.createElement('button');

contactButton.setAttribute('id', 'contact');
aboutButton.setAttribute('id', 'about');
menuButton.setAttribute('id', 'menu');

contactButton.textContent = 'Contact';
aboutButton.textContent = 'About';
menuButton.textContent = 'Menu';

const container = document.querySelector('#container');

container.appendChild(contactButton);
container.appendChild(aboutButton);
container.appendChild(menuButton);

document.addEventListener('click', function (event) {

    if (event.target.matches('#about')){ 
        about();
    };
    if (event.target.matches('#contact')){ 
    contact();
    };
    if (event.target.matches('#menu')){ 
    menu();
    };
// of course this will just fill the page over and over

}, false);