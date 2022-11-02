import React from 'react'

export default function Image() {

    // Завдання 2 -------------------------------
    function add(){
        document.getElementById("img1").src = "images/Carpathian.jpg"
        document.getElementById("img1").style.display = ""        
    }

    var size = 200

    function increase(){
        size += 100
        document.getElementById("img1").style.width = size + "px"
        document.getElementById("img1").style.height = size + "px"  
    }
    function reduce(){
        size -= 100
        document.getElementById("img1").style.width = size + "px"
        document.getElementById("img1").style.height = size + "px"    
    }
    function remove(){
        document.getElementById("img1").style.display = "none"    
    }

    return <div>
        <a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D0%B8">
            <img id="img1" src="images/Carpathian.jpg"/>
        </a>
        <div>
            <button onClick={add}>Додати</button>
            <button onClick={increase}>Збільшити</button>
            <button onClick={reduce}>Зменшити</button>
            <button onClick={remove}>Видалити</button>
        </div>
    </div>
}
