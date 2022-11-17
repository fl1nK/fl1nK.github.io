// Завдання 1 --------------------------------
function randomColor(){
    return Math.floor(Math.random() * 255);
}

function bcEx1(){
    document.getElementById("ex1").style.backgroundColor = "rgb("+randomColor()+","+randomColor()+","+randomColor()+")"
    document.getElementById("ex1").style.color = "rgb("+randomColor()+","+randomColor()+","+randomColor()+")"
}

function bcEx2(){
    document.querySelector("#ex2").style.backgroundColor = "rgb("+randomColor()+","+randomColor()+","+randomColor()+")"
    document.querySelector("#ex2").style.color = "rgb("+randomColor()+","+randomColor()+","+randomColor()+")"
}

// Завдання 2 -------------------------------
function add(){
    document.getElementById("img").src = "images/img2.jpg"
    document.getElementById("img").style.display = ""        
}

var size = 500

function increase(){
    size += 100
    document.getElementById("img").style.width = size + "px"
}
function reduce(){
    size -= 100
    document.getElementById("img").style.width = size + "px"   
}
function delet(){
    document.getElementById("img").style.display = "none"    
}