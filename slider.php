<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Друга сторінка</title>
   <link rel="stylesheet" type="text/css" href="lab1_css.css">
   <link rel="stylesheet" href="style.css">
</head>

<body>

   <div class="wrapper">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3">
      </div>
      <div class="box4">

         <div class="slider" id="slider">
            <a class="prev" onclick="minusSlide()">&#10094;</a>
            <a class="next" onclick="plusSlide()">&#10095;</a>
         </div>

         <div class="slider-dots" id='slider-dots'>
         </div>

      </div>
      <div class="box5"></div>
      <div class="box6"></div>
   </div>

   <script>
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function() {

         const myObj = JSON.parse(this.responseText);

         let div1 = document.getElementById('slider');
         let div2 = document.getElementById('slider-dots');

         const arr = myObj.name

         for (i = 0; i < arr.length; i++) {
            console.log(arr[i])
            div1.insertAdjacentHTML('afterbegin', '<div class="item"><div class="slideText" id="name"></div></div>');
            document.getElementById("name").innerHTML = arr[i]
            div2.insertAdjacentHTML('afterbegin', '<span class="slider-dots_item" onclick="currentSlide(' + i + ')"></span>');

         }
         plusSlide()
      }
      xmlhttp.open("GET", "content.json");
      xmlhttp.send();
   </script>
   <script src="script.js"></script>
</body>

</html>