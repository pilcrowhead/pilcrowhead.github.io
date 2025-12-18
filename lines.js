window.onload = randomLine;
function randomLine() {
    var i = Math.floor(Math.random() * lines.length);
    var l = document.getElementById("line");
    console.log(l);
    l.innerText = lines[i];
}
var lines = ['hi there', 'hola', 'what\'s up?', 'yo', 'sup', 'hello', 'hey', 'hi', ]
