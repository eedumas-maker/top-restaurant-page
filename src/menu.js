export default function menu() {
    console.log("it's the menu page");

    const header = document.createElement('div');
    const headerText = document.createElement('h1');
    const menuText = document.createElement('div');

    headerText.textContent = "Menu";
    menuText.textContent = "coffee, pancakes, breakfast foods galore";

    container.appendChild(header);

    header.appendChild(headerText);
    header.appendChild(menuText);
}