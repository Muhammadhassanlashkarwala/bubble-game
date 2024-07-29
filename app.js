function makeBubbles() {
    let clutter = "";

for (let i = 1; i <= 126; i++) {
    // const element = array[i];
    console.log(i);
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}


document.querySelector("#pbtm").innerHTML = clutter ;
}
makeBubbles()

let timer = 60;
let score = 0;

function runTimer() {
  let timerIns  =   setInterval(() => {
        if (timer >0) {
            timer-- ;
            document.querySelector("#timerbox").innerHTML = timer;   
        }
        else{
            clearInterval(timerIns);
        }
    }, 1000);
}
runTimer()

function getNewHit() {
    let randomNumber = Math.floor(Math.random() * 10) ;
     document.querySelector("#hitbutton").innerHTML = randomNumber ;
}
getNewHit()

function increaseScore() {
    score += 10
    document.querySelector("#scorebox").innerHTML = score ;
}
// increaseScore()