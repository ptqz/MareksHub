document.getElementById("myH").style.fontFamily = "Verdana, Arial, sans-serif";


function myFunction() {
    var x = document.createElement("IMG");
    document.getElementById("myH").innerHTML = "ИДИ НАХУЙ";
    x.setAttribute("src", "scary-gif-4.gif");
    x.setAttribute("width", "1600");
    x.setAttribute("height", "800");
    x.setAttribute("alt", "The Pulpit Rock");
    x.style.display = "block";
    x.style.margin = "0 auto";
    document.getElementById("play-button").style.display = "none";
    document.getElementById("play-button").style.size = "large";
    document.body.appendChild(x);
  }

  const playButton = document.getElementById("play-button");
  const sound = document.getElementById("sound");
  
 playButton.addEventListener("click", function() {
   sound.play();
 });


 