import './style.css';
import about from './about.js';
import contact from './contact.js';
import menu from './menu.js';

const navigation = (() => {

    const clearPage = () => {
        const container = document.querySelector('#container');
        removeChildren(container);
    }

    const initializePage = () => {
        const contactButton = document.createElement('button');
        const aboutButton = document.createElement('button');
        const menuButton = document.createElement('button');

        contactButton.setAttribute('id', 'contact');
        aboutButton.setAttribute('id', 'about');
        menuButton.setAttribute('id', 'menu');

        contactButton.textContent = 'Contact';
        aboutButton.textContent = 'About';
        menuButton.textContent = 'Menu';

        const buttonRow = document.querySelector('#buttonRow');

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
        initializePage
    }
})();

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