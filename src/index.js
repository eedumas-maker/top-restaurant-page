import './style.css';
import about from './about';
import nighthawks from './nighthawks.jpg';

about(); // gotta properly say it's a function yeah.

// lets put a header with the name of the place
// lets put in an image

// let's call the diner the late night
const container = document.querySelector('#container');


const header = document.createElement('div');
const headerText = document.createElement('h1');

const diner = new Image();
diner.src = nighthawks;

headerText.textContent = "The Late Night";

const dinerCaption = document.createElement('figcaption');
dinerCaption.textContent = "Nighthawks by Edward Hopper, 1947"

container.appendChild(header);

header.appendChild(headerText);
header.appendChild(diner);
header.appendChild(dinerCaption);

