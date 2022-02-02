var canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

canvas.width = 400;
canvas.height = 400;


var c = canvas.getContext('2d');

// rectangle
// c.fillStyle = 'blue'
// c.fillRect(100, 100, 100, 100); //yesle canvas vitra k banauni

// console.log(canvas);

// // Line 
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300); //(y,x)
// c.lineTo(50, 300)
// c.strokeStyle = "#fa34a3 "
// c.stroke();

// // arc or circle
// c.beginPath();
// c.arc(500, 500, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'red';
// c.stroke();

// // many circle
// for (var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }

// c.beginPath();
// c.arc(500, 500, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'red';
// c.stroke();

// circle animation
var x = Math.random() * canvas.width; //200;
var y = Math.random() * canvas.height; //200;
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;
var r = 30;

function animates() {
    requestAnimationFrame(animates);
    c.clearRect(0, 0, canvas.width, canvas.height)

    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2, false);
    c.fillStyle = "red";
    c.fill();
    c.strokeStyle = 'red';
    c.stroke();

    if (x + r > canvas.width || x - r < 0) {
        dx = -dx;
    }
    x += dx;
    if (y + r > canvas.height || y - r < 0) {
        dy = -dy;
    }
    y += dy;
}
animates();