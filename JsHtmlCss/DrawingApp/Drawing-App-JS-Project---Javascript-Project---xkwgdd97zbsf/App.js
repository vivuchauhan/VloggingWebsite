const canvas = document.getElementById("canvas");
const body = document.querySelector('body');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var theColor = '';
var lineW = 10;
let prevX = null;
let prevY = null;
let draw = false;

body.style.backgroundColor = "#FFFFFF";
var theInput = document.getElementById("favcolor");

theInput.addEventListener("input", function () {
    theColor = theInput.value;
    canvas.style.backgroundColor = theColor;
}, false);

const ctx = canvas.getContext("2d");
ctx.lineWidth = lineW;

document.getElementById("ageInputId").oninput = function () {
    draw = null;
    lineW = document.getElementById("ageInputId").value;
    document.getElementById("ageOutputId").innerHTML = lineW;
    ctx.lineWidth = lineW;
};

let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs);
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr;
    });
});

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    a.href = data;
    a.download = "sketch.png";
    a.click();
});

function startDrawing(x, y) {
    draw = true;
    prevX = x;
    prevY = y;
}

function stopDrawing() {
    draw = false;
}

function drawLine(x, y) {
    if (prevX == null || prevY == null || !draw) {
        prevX = x;
        prevY = y;
        return;
    }

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y);
    ctx.stroke();

    prevX = x;
    prevY = y;
}

function handleStart(event) {
    event.preventDefault();

    if (event.touches && event.touches.length === 1) {
        const touch = event.touches[0];
        startDrawing(touch.clientX, touch.clientY);
    }
}

function handleEnd(event) {
    event.preventDefault();

    stopDrawing();
}

function handleMove(event) {
    event.preventDefault();

    if (event.touches && event.touches.length === 1) {
        const touch = event.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        drawLine(x, y);
    }
}

canvas.addEventListener("mousedown", (e) => {
    startDrawing(e.clientX, e.clientY);
});

canvas.addEventListener("mouseup", () => {
    stopDrawing();
});

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    drawLine(x, y);
});

canvas.addEventListener("touchstart", handleStart);
canvas.addEventListener("touchend", handleEnd);
canvas.addEventListener("touchmove", handleMove);
