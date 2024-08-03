let timer = 60;
let score = 0;
let hitRn = 0;
function fn(){
    var aud=document.getElementById("aud")
    aud.play()
}
document.getElementById("str").addEventListener("click",()=>{
    document.getElementById("demo").style.display = "none" 
fn()
})
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

function runTimer() {
  let timerIns  =   setInterval(() => {
        if (timer >0) {
            timer-- ;
            document.querySelector("#timerbox").innerHTML = timer;   
        }
        else{
            clearInterval(timerIns);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over <br> Your Total Score is : ${score}</h1> `
        }
       
    }, 1000);
 
}
runTimer()

function getNewHit() {
    hitRn = Math.floor(Math.random() * 10) ;
     document.querySelector("#hitbutton").innerHTML = hitRn;
}
getNewHit()

function increaseScore() {
    score += 10
    document.querySelector("#scorebox").innerHTML = score ;
}
document.querySelector("#pbtm").addEventListener("click" , (dets)=>{
    // let bubble = document.querySelector(".bubble");
    // alert("chal raha h")
    let clickedNum = (Number(dets.target.textContent));

    if (hitRn == clickedNum) {
        increaseScore();
        getNewHit();
        makeBubbles();
    }
})