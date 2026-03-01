let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let memory = 0;

// Append Value
function appendValue(value) {
    display.value += value;
}

// Clear
function clearDisplay() {
    display.value = "";
}

// Calculate
function calculate() {
    try {
        if (display.value.includes("/0")) {
            throw "Cannot divide by zero";
        }
        let result = eval(display.value);
        addHistory(display.value + " = " + result);
        display.value = result;
    } catch {
        alert("Invalid Input");
        display.value = "";
    }
}

// Square Root
function sqrt() {
    try {
        let value = parseFloat(display.value);
        display.value = Math.sqrt(value);
    } catch {
        alert("Invalid Input");
    }
}

// Power
function power() {
    display.value += "**";
}

// Percentage
function percentage() {
    display.value = parseFloat(display.value) / 100;
}

// Memory Functions
function memoryAdd() {
    memory += parseFloat(display.value) || 0;
}

function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}

// History
function addHistory(entry) {
    let li = document.createElement("li");
    li.textContent = entry;
    historyList.prepend(li);
}

// Dark Mode
document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
