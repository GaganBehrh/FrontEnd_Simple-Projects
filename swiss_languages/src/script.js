
    function German() {
      alert("Congratulations, you speak one of the National languages of Switzerland spoken by 63%(approx) of the population ");
    }
 function French() {
     alert("Congratulations, you speak one of the National languages of Switzerland spoken by 23%(approx) of the population ");
    }
function Italian() {
      alert("Congratulations, you speak one of the National languages of Switzerland spoken by 8%(approx) of the population ");
    }
 function Romansch() {
     alert("Congratulations, you speak one of the National languages of Switzerland spoken by 0.5%(approx) of the population ");
    }

    let langbutton1 = document.getElementById("button1");
    langbutton1.addEventListener("click", German);

let langbutton2 = document.getElementById("button2");
    langbutton2.addEventListener("click", French);
let langbutton3 = document.getElementById("button3");
    langbutton3.addEventListener("click", Italian);

let  langbutton4 = document.getElementById("button4");
    langbutton4.addEventListener("click", Romansch);

