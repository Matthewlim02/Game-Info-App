let id = 0;

document.getElementById('add').addEventListener('click', () =>{
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    /*Takes the ID used in our HTML to insert a new row of data using our form element.*/
    row.insertCell(0).innerHTML = document.getElementById('new-game-title').value;
    row.insertCell(1).innerHTML = document.getElementById('new-game-genre').value;
    row.insertCell(2).innerHTML = document.getElementById('new-game-rating').value;
    row.insertCell(3).innerHTML = document.getElementById('new-game-price').value;
    let actions = row.insertCell(4);
    actions.appendChild(deleteButton(id++));
    /*Clears the text boxes after each created row.*/
    document.getElementById('new-game-title').value = '';
    document.getElementById('new-game-genre').value = '';
    document.getElementById('new-game-rating').value = '';
    document.getElementById('new-game-price').value = '';
});
/*Used to make our delete button for each table row created.*/
function deleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}