let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "purple", "green", "red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () =>{
    if(started == false) {
        console.log("game started!");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
};

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
};

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    //random btn flash
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameFlash(randBtn);
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}