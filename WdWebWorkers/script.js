document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;
    const counterDisplay = document.getElementById("counter");
    let incremenBtn = document.getElementById("InBtn");
    let decrementBtn = document.getElementById("DeBtn");
    incremenBtn.onclick = function () {
        counter++;
        counterDisplay.innerHTML = counter;
    };
    decrementBtn.onclick = function () {
        counter--;
        counterDisplay.innerHTML = counter;
    };
   const heavyWorker = new Worker('worker.js');
    document.getElementById("heavyBtn").addEventListener("click", function () {
        heavyWorker-postMessage('start');
    });
});