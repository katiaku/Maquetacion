const lime = document.querySelector(".limeButton");
const yellow = document.querySelector(".yellowButton");
const cyan = document.querySelector(".cyanButton");
const pink = document.querySelector(".pinkButton");
const colorButton = document.querySelector(".colorButton");
const colors = [lime, yellow, cyan, pink];

const start = document.querySelector(".start");
const process = document.querySelector(".process");
const continues = document.querySelector(".continue");
const reset = document.querySelector(".reset");

let gameStarted;
let level = 0;
let gameSequence = [];
let userSequence = [];
let userOK = false;

lime.addEventListener("click", getUserSequence);
yellow.addEventListener("click", getUserSequence);
cyan.addEventListener("click", getUserSequence);
pink.addEventListener("click", getUserSequence);

start.addEventListener("click", startGame);
process.addEventListener("click", processUserSequence);
continues.addEventListener("click", continueGame);
reset.addEventListener("click", resetGame);

function startGame() {
    level = 1;
    gameSequence = generateRandomSequence(level);
    playSequence(gameSequence);
    gameStarted = true;
    // console.log("SEQUENCIA CORRECTA", gameSequence);
}

function generateRandomSequence(length) {
    const sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(getRandomColor());
    }
    return sequence;
}

function getUserSequence() {
    if (gameStarted) {
        const selectedColor = colors.indexOf(this);
        if (selectedColor !== -1) {
            const colorElement = colors[selectedColor];
            showColor(colorElement);
            userSequence.push(selectedColor);
        }
    }
    // console.log("SEQUENCIA JUGADOR", userSequence);
    userOK = false;
}

function showColor(colorElement) {
    colorElement.classList.add("active");
    setTimeout(() => {
        colorElement.classList.remove("active");
    }, 1000);
}

function processUserSequence() {
    // console.log(userSequence);
    if (level === 0) {
        alert("¡Pulsa Start para empezar!")
    } else if (userSequence.length === 0) {
        alert("¡No has seleccionado los colores!")
    } else {
        for (let i = 0; i < userSequence.length; i++) {
            if (userSequence[i] !== gameSequence[i] || userSequence.length !== gameSequence.length) {
                alert("¡Te has equivocado!");
                userOK = false;
                userSequence = [];
            }
            getUserSequence();
        }
        if (userSequence.length === gameSequence.length) {
            alert("¡Correcto!");
            userOK = true;
        }
    }
}

function continueGame() {
    // console.log(userOK);
    if (level === 0) {
        alert("¡Pulsa Start para empezar!")
    } else if (userSequence.length === 0) {
        alert("¡No has seleccionado los colores!")
    } else if (!userOK) {
        alert("¡No has procesado tu selección!")

    } else {
        userSequence = [];
        level++;
        gameSequence.push(getRandomColor());
        playSequence(gameSequence);
        // console.log("SEQUENCIA CORRECTA", gameSequence);
    }
}

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}

function playSequence(sequence) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < sequence.length) {
            showColor(colors[sequence[i]]);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 2000);
}

function resetGame() {
    level = 0;
    gameSequence = [];
    userSequence = [];
    gameStarted = false;
    // console.log("SEQUENCIA JUGADOR", userSequence);
    // console.log("SEQUENCIA CORRECTA", gameSequence);
}
