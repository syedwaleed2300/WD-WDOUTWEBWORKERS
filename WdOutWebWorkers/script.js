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
   
    document.getElementById("heavyBtn").addEventListener("click", function () {
        heavyCalculation();
    });
    function heavyCalculation() {
        let result = 0;
        for (let i = 0; i < 1000000786; i++) {
            result += Math.sqrt(i);
        }
        console.log("Heavy Calculation Done. Result:", result);
    }
});