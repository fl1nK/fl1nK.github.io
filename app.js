var divX = document.getElementById("divX")
var divY = document.getElementById("divY")

textDivX= divX.textContent
divX.textContent = divY.textContent
divY.textContent = textDivX

//-----------2
function plosha(a,b){
  document.getElementById("plosha").textContent = "Площа = " + (a+b)*2
}

plosha(2,5)

//-----------3
function validateForm()
{

var num1 = document.forms["myForm"]["num1"].value
var num2 = document.forms["myForm"]["num2"].value
var num3 = document.forms["myForm"]["num3"].value
var num4 = document.forms["myForm"]["num4"].value
var num5 = document.forms["myForm"]["num5"].value
var num6 = document.forms["myForm"]["num6"].value
var num7 = document.forms["myForm"]["num7"].value
var num8 = document.forms["myForm"]["num8"].value
var num9 = document.forms["myForm"]["num9"].value
var num10 = document.forms["myForm"]["num10"].value
const points =[]

points[0] = num1
points[1] = num2
points[2] = num3
points[3] = num4
points[4] = num5
points[5] = num6
points[6] = num7
points[7] = num8
points[8] = num9
points[9] = num10

points.sort(function(a, b){return a-b})

result = points[0] +" "+ points[9]

document.cookie = "result=" + result
alert(document.cookie)

}


function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("result");
  if (user != "") {
    
    if (confirm(document.cookie + " Сохранить куки?")) { 
      if (alert("Куки сохранены, перезагрузите страничку")) { 
        window.location.reload();
      } else {
        document.cookie ="result= ; max-age=0;"
        window.location.reload();
      }
    }   
  } 
}

//--------------------4---------
var chbox = document.getElementById('textFont');
var div = document.getElementById("textfocus")

const textFont = localStorage.getItem("textFont")
div.style.fontWeight = textFont

const box = localStorage.getItem("box")
chbox.checked = box

function fun1() {

if (chbox.checked) {
    div.style.fontWeight = '700'
    localStorage.setItem("textFont", "700")
    localStorage.setItem("box", "true")
  }
  else {
    div.style.fontWeight = 'normal'
    localStorage.clear()
  }
}

//--------------------5---------

function addRow(id){
    var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    td1.appendChild(document.createTextNode("Рядок"))
    row.appendChild(td1);
    tbody.appendChild(row);
  }

function saveEdits() {

  var editElem = document.getElementById("myTable");
  var userVersion = editElem.innerHTML;
  localStorage.userEdits = userVersion;

  var num7div1 = document.getElementById("num7div1");
  var num7div2 = document.getElementById("num7div2")
  swapElements(document.getElementById("num7div1"), document.getElementById("num7div2"));
}

function swapElements(obj1, obj2) {
    
    var parent2 = obj2.parentNode;
    var next2 = obj2.nextSibling;
    
    if (next2 === obj1) {
        parent2.insertBefore(obj1, obj2);
    } else {
        obj1.parentNode.insertBefore(obj2, obj1);
        if (next2) {
            parent2.insertBefore(obj1, next2);
        } else {
            parent2.appendChild(obj1);
        }
    }
}