// var newDiv = document.createElement('div');
// console.log(newDiv);
// newDiv.className = "dom";
// newDiv.id = "domid";
// newDiv.setAttribute = "title";
// var text = document.createTextNode('this is element create by dom')
// newDiv.appendChild(text);


function buttonClicked() {
    document.getElementById("here").textContent = "Changed vayo"
}
var button = document.getElementById('button1').addEventListener('click', buttonClicked);
console.log(button);