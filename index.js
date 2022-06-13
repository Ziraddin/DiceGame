
var randomNumber1=Math.floor(6*Math.random()+1);
var randomNumber2=Math.floor(6*Math.random()+1);


document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png")
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png")



if(randomNumber1>randomNumber2)
{
    document.querySelectorAll("h1")[0].textContent="🚩Player 1 wins!";
}


if(randomNumber1<randomNumber2)
{
    document.querySelectorAll("h1")[0].textContent="Player 2 wins!🚩";
}


if(randomNumber1==randomNumber2)
{
    document.querySelectorAll("h1")[0].textContent="Draw";
}


document.querySelectorAll("button")[0].setAttribute("onClick","location.reload()");
