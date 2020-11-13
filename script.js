var diallines = document.getElementsByClassName('diallines')
var clockE1 = document.getElementsByClassName('clock')[0]

for(var i = 1; i < 60; i++) {
    clockE1.innerHTML += "<div class='diallines'></div>";
    diallines[i].getElementsByClassName.transform = "rotate(" + 6 * + "deg)"
}
function clock(){
    var weekday = new Array(7),
    d = new Date()
}