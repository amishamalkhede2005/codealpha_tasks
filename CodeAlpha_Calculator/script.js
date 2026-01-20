let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function (event) {
    if (
        (event.key >= '0' && event.key <= '9') ||
        ['+', '-', '*', '/', '.'].includes(event.key)
    ) {
        appendValue(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
