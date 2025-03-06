
function rnd6() {
    let rnd = Math.floor(Math.random() * 6) + 1;
    return "./images/dice" + rnd + ".png";
}

randomNumber1 = rnd6();
randomNumber2 = rnd6();

;

function rollDice() {
    document.getElementsByClassName("img1")[0].setAttribute("src",randomNumber1)
    document.getElementsByClassName("img2")[0].setAttribute("src",randomNumber2)
}

rollDice();