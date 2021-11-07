
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
document.querySelector("div .img1").setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
document.querySelector("div .img2").setAttribute("src", randomImageSource2);


if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
  document.querySelector("h1").classList.add("reduceSize");
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!🚩";
  document.querySelector("h1").classList.add("reduceSize");
}
else {
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
