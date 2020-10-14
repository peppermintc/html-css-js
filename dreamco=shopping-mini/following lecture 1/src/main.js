// Fetch items from JSON file
function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);
}

// Update list with given items
function displayItems(items) {
    const container = document.querySelector('.items');
    const html = items.map(item => createHTMLString(item)).join('');
    container.innerHTML = html;
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// On Button Click
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const value = dataset.value;
    const key = dataset.key;
    
    if (key == null || value == null) {
        return;
    }
    
    const filteredItems = items.filter(item => item[key] === value);
    displayItems(filteredItems);
}

// Add Events to Buttons
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