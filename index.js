var randomNumber1 = Math.floor(Math.random() * 6)+1;


var img = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.querySelector(".img1").setAttribute("src", img[randomNumber1-1]);

var randomNumber2 = Math.floor(Math.random() * 6)+1;

document.querySelector(".img2").setAttribute("src", img[randomNumber2-1]);

if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").textContent="Player 2 Wins!";
}
else if(randomNumber2 < randomNumber1)
{
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else
{
    document.querySelector("h1").textContent="Draw!";
}