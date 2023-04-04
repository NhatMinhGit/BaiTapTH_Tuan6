const timeDisplay = document.querySelector("#calDisplay");
const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");
const divineBtn = document.querySelector("#divineBtn");
const multiBtn = document.querySelector("#multiBtn");

let a = document.getElementById().value;
plusBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});