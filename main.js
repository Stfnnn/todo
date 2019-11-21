let myArray = [];

function addToList() {

    let label = document.createElement('label');
    let buttons = document.getElementById('addButton');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = 1;
    checkbox.name = "toDo";
    checkbox.onclick = crossOutText.bind(checkbox);

    const button = document.createElement('button');
    button.type = 'button';
    button.value = 1;
    button.id = 'remove';


    let input = document.getElementById('inputs').value;
    let li = document.createElement('li');
    let list = document.getElementById('list');
    let textnode = document.createTextNode(input);

    li.appendChild(button).innerText = 'X';
    li.appendChild(checkbox);
    li.appendChild(textnode);
    myArray = list.appendChild(li);


    button.addEventListener('click', function() {
        li.parentNode.removeChild(li);
    });

    const name = 'Tasks: ' + document.getElementById('inputs').value;
    const item = {
        name: name
    };

    items.push(item);
    counter++;
    localStorage.setItem('myArray', JSON.stringify(items));
    renderItems();
}

const items = JSON.parse(localStorage.getItem('items')) || [];
counter = items.length + 1; // start counting from 1
renderItems();

function renderItems() {
    let itemListElements = document.getElementById('list');
    // erase list
    itemListElements = "";
    // render items 
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemElement = document.createElement("li");
        itemElement.innerText = item.name;
        itemListElements.appendChild(myArray);
    }
}


function crossOutText() {
    if (this.checked) {
        this.parentNode.style.textDecoration = "line-through";
    } else {
        this.parentNode.style.textDecoration = "none";
    }

}