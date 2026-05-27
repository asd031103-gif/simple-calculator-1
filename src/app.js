import { calculate } from "./calculator.js";

const display = document.querySelector('[data-testid="display"]');
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const clearBtn = document.getElementById("clear");
const opButtons = document.querySelectorAll("[data-op]");

function readNumber(el) {
    const v = parseFloat(el.value);
    return Number.isFinite(v) ? v : 0;
}

opButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const a = readNumber(inputA);
        const b = readNumber(inputB);
        try {
            const result = calculate(btn.dataset.op, a, b);
            display.textContent = String(result);
        } catch (err) {
            display.textContent = "에러: " + err.message;
        }
    });
});

clearBtn.addEventListener("click", () => {
    inputA.value = "";
    inputB.value = "";
    display.textContent = "0";
});
