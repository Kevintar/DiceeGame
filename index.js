let btn123 = document.querySelector('.btn');




let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomDiceImage = "dice" + randomNumber1 +".png";
let randomImageSrc = "images/" + randomDiceImage;
let image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomImageSrc);

let randomNumber2 = Math.floor(Math.random()*6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 +".png";
let randomImageSrc2 = "images/" + randomDiceImage2; 
let image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src", randomImageSrc2);

if (randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = "Draw";
} else if(randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player1 Win";
} else{document.querySelector('h1').innerHTML = "Player2 Win";}


