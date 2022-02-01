var form = document.getElementById('addForm');
var itemList = document.getElementById('itemsid');

form.addEventListener('submit', newitem)

function newitem(e) {
    e.preventDefault();
    var addeditem = document.getElementById('item').value;

    var newLi = document.createElement('li');
    newLi.className = "list-group-item";
    newLi.appendChild(document.createTextNode(addeditem));
    itemList.appendChild(newLi);
}