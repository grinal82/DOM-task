const rotator = document.querySelector(".rotator");
const cases = document.querySelectorAll(".rotator__case");
let currentCase = 0;

function rotate() {
    cases[currentCase].classList.remove("rotator__case_active");
    currentCase++;
    if (currentCase >= cases.length) {
        currentCase = 0;
    }
    cases[currentCase].classList.add("rotator__case_active");

    rotator.style.color = cases[currentCase].dataset.color;
}

setInterval(rotate, 1000);
