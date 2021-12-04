document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style = "height: 250px; width: 250px; background-color: orange"
});

document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("box").style.backgroundColor = "blue"     

});

//to fade the box
document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("box").style.opacity = ".15"
});

//since we're resetting, needed to bring back h,w, and color
document.getElementById("button4").addEventListener("click", function() {
    document.getElementById("box").style = "height: 150px; width: 150px; background-color: orange"
});