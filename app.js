let clutter = "";

for (let i = 1; i <= 126; i++) {
    // const element = array[i];
    console.log(i);
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}


document.querySelector("#pbtm").innerHTML = clutter ;