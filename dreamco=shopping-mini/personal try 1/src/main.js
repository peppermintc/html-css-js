// Fetch JSON
function fetchData() {
return fetch("../data/clothes.json")
    .then((res) => res.json())
    .then((data) => data.items);
}

// Create HTML
function createHTML(item) {
return `
    <div>
    ${item.category}  ${item.color}
    </div>
`;
}

// Display data
function displayItems(items) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = items.map(item => createHTML(item)).join('');
}

// On Button Click
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = event.target.dataset.key;
    const value = event.target.dataset.value;

    if (key == null || value == null)
        return;
    
    const filteredItems = items.filter(item => item[key] === value);
    displayItems(filteredItems);
}

// Set Event Listener
function setEventListener(items) {
    const buttons = document.querySelector('#filter');
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// Execute
fetchData()
.then(items => {
    console.log(items);
    displayItems(items);
    setEventListener(items);
})
.catch(console.log);