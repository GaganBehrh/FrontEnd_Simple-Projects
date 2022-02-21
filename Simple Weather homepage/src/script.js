
      function weather() {
        let city = prompt("What city do you live in?");
        let temp = prompt("What temperature is it?");
        let h1 = document.querySelector("h1");
        if (temp >= 0)
          h1.innerHTML =
            "😀" + "<br />" + "Currently " + temp + "°C in " + city;
        else
          h1.innerHTML = "☹️" + "<br />" + "Currently" + temp + "°C in " + city;
      }
      let changecitybutton = document.querySelector("button");
      changecitybutton.addEventListener("click", weather);
