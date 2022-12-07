function myFunction(x) {
    x.classList.toggle("change");

    var y = document.getElementById("submenu");
    var a = document.getElementById("menuham")

    if (y.style.display === "flex") {
        y.style.display = "none";
        a.style.position = "inherit"
        a.style.right = "0"

    } else {
        y.style.display = "flex";
        a.style.position = "fixed"
        a.style.right = "10%"

    }
}


window.onscroll = function () {
    var top2 = window.scrollY;


    let buttonup = document.getElementById("goupbtn");

    if (top2 >= 100) {
        buttonup.style.display = "block"
    }
    else {
        buttonup.style.display = "none"
    }

    if (top2 >= 2160) {
        buttonup.style.position = "relative"
    }
    else {
        buttonup.style.position = "fixed"
    }
}


$(document).ready(function () {
    // array with texts to type in typewriter
    let dataText = ["Web Developer.", "Web Designer."];
  
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < text.length) {
        // add next character to h1
        document.querySelector("#job").innerHTML =
          text.substring(0, i + 1) +
          '<span class="type" aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == "function") {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (typeof dataText[i] == "undefined") {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 1000);
      }
      // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
  

  $(document).ready(function () {
    // array with texts to type in typewriter
    let dataText = ["Curriculum Vittae"];
  
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < text.length) {
        // add next character to h1
        document.querySelector("#name").innerHTML =
          text.substring(0, i + 1) +
          '<span class="type" aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == "function") {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (typeof dataText[i] == "undefined") {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 1000);
      }
      // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });