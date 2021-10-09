
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
