import nighthawks from './nighthawks.jpg'

export default function about() {
    console.log('this is the about page');

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
}
