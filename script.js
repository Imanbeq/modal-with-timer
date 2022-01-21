let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none"; 
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



let time = 2800;
const secondElement = document.querySelector("#s");
const milisecondElement = document.querySelector("#ms");
const buttonElement = document.querySelector("#btn");

buttonElement.addEventListener("click", () =>{
    setInterval(startClock, 10);
})

function startClock() {
    const seconds = Math.floor(time / 100);
    let miliseconds = time % 100;
    miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;
    secondElement.textContent = `${seconds}`;
    milisecondElement.textContent = `${miliseconds}`;
    time--;
}