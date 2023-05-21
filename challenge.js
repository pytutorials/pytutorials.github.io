function right(){
  var h1 = document.getElementById("h1");
  h1.innerText = "Correct! Click me to go to the next challenge you want to try..";
  h1.addEventListener("click", function(){
    h1.style.display = "none";
    var nextChallenge = prompt("Enter the next challenge you want to try > ");
    if(nextChallenge != ""){
      window.location.assign("https://pytutorials.github.io/challenges/" + nextChallenge);
    }else{
       nextChallenge = prompt("Enter the next challenge you want to try > ");
       window.location.assign("https://pytutorials.github.io/challenges/" + nextChallenge);
    }
  })
}

function wrong(){
  var h1 = document.getElementById("h1");
  h1.innerText = "Wrong! Click me to undisplay this. ";
  h1.addEventListener("click", function(){
    h1.innerText = "";
  })
}