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






















let time = 1680;
const minuteElement = document.querySelector("#m");
const secondElement = document.querySelector("#s");
const buttonElement = document.querySelector("#btn");

buttonElement.addEventListener("click", () =>{
    setInterval(startClock, 1000);
})

function startClock() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minuteElement.textContent = `${minutes}`;
    secondElement.textContent = `${seconds}`;
    time--;
}