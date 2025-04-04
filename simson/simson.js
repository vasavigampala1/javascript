let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let score=[0];

let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;

        levelUp();
        updateScore();
    }
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIndex=Math.floor(Math.random()*4);
    let randomColor=btns[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    // console.log(gameSeq);
    gameFlash(randomBtn);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function checkAns(index){
    // console.log("Current Level",level);

    if(userSeq[index]==gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else {
        h2.innerHTML= `Game Over! You're score was <b>${level}</b> <br> Press any key to restart again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        score.push(level);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function updateScore(){
    let span=document.querySelector("span");
    span.innerHTML=`<b>${Math.max(...score)}</b>`
}