import './style.css';

export default function contact() {
    console.log("it's the contact page");
    
    const header = document.createElement('div');
    const headerText = document.createElement('h1');
    const contactText = document.createElement('div');

    header.classList.add('header');
    headerText.textContent = "Contact Us";
    contactText.textContent = "A phone number, email, and that's about it";

    container.appendChild(header);

    header.appendChild(headerText);
    header.appendChild(contactText);

}