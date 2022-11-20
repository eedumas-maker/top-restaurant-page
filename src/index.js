import './style.css';
import about from './about.js';
import contact from './contact.js';
import menu from './menu.js';


// New goal, have a consistent header and button row (all within index.js)
// have photo on left, and have buttons change content of what's on right

const navigation = (() => {

    const container = document.querySelector('#container');

    const clearPage = () => {
         //have it only clean the little container on the right
        removeChildren(container);
    }

    const addHeader = () => {
        
        const header = document.createElement('div');
        const headerText = document.createElement('h1');

        header.classList.add('header');
        headerText.textContent = "The Late Night";
        container.appendChild(header);

    }

    const addButtonRow = () => {
        const contactButton = document.createElement('button');
        const aboutButton = document.createElement('button');
        const menuButton = document.createElement('button');

        contactButton.setAttribute('id', 'contact');
        aboutButton.setAttribute('id', 'about');
        menuButton.setAttribute('id', 'menu');

        contactButton.textContent = 'Contact';
        aboutButton.textContent = 'About';
        menuButton.textContent = 'Menu';

        const buttonRow = document.createElement('div');
        buttonRow.classList.add('header');
        
        buttonRow.appendChild(contactButton);
        buttonRow.appendChild(aboutButton);
        buttonRow.appendChild(menuButton);
        
        
        
        about(); // run initial about page.
    }

    function removeChildren(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    return {
        clearPage,
        initializePage,
        addHeader
    }
})();

navigation.addHeader();
navigation.initializePage();


document.addEventListener('click', function (event) {

    if (event.target.matches('#about')){ 
        navigation.clearPage();
        about();
    };
    if (event.target.matches('#contact')){ 
        navigation.clearPage();
        contact();
    };
    if (event.target.matches('#menu')){ 
        navigation.clearPage();
        menu();
    };
// of course this will just fill the page over and over

}, false);