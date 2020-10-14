// Fetch data.json and load items
function loadItems() {
    return fetch('data/data.json').then(response => response.json()).then(json => json.items)
}

// display result
function displayItems(items) {
    const list = document.querySelector('.result');
    list.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// create HTML string of item 
function createHTMLString(item) {
    return `
        <li class="item">
            <img src="${item.image}" alt="thumbnail_img" class="item__thumbnail">
            <span class="item__description">${item.gender}, ${item.size}</span>
        </li>
    `;
}

// on button click
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    const filteredItems = items.filter(item => item[key] === value);
    displayItems(filteredItems);
}

// set event listerners to buttons
function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');

    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);