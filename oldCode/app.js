let gameSeq = [];
let userSeq = [];

let btn = ["yellow", "purple", "green", "red"];

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

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    //random btn flash
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btn[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    btnFlash(randBtn);
}