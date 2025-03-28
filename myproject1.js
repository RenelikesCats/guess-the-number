const guessInput = document.getElementById("guessInput");
let message = document.getElementById("message");
const checkGuess = document.getElementById("checkGuess");
const playAgainButton = document.getElementById("playAgain");
let attempts = document.getElementById("attempts");
const guessedNumbersList = document.getElementById("guessedNumbers");
const noor = document.getElementById("noor");

let guess;
let num;
let aantal = 1;

function startGame() {
    num = Math.floor(Math.random() * 100) + 1;
    aantal = 1;
    attempts.innerText = "Attempts: 0";
    message.innerText = "";
    guessInput.disabled = false;
    checkGuess.disabled = false;
    guessedNumbersList.innerHTML = "";
    guessInput.value = "";
    noor.classList.add("hid");
}

guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkGuess.click();
    }
});


checkGuess.onclick = function () {
    if (aantal > 10) {
        message.innerText = "Game over! the number was " + num;
        guessInput.disabled = true;
        checkGuess.disabled = true;
        return;
    }


    if (guessInput.value.trim() === "") {
        message.innerText = "Please enter a number.";
        return;
    }

    guess = Number(guessInput.value);

    if (guess < 0 || guess > 100) {
        message.innerText = "Enter a number between 1 and 100 ";
        return;
    }
    else if (guess < num) {
        message.innerText = "Too low";

    }
    else if (guess > num) {
        message.innerText = "Too high";
    }
    else {
        message.innerText = "You win! 🐈";
        guessInput.disabled = true;
        checkGuess.disabled = true;
        return;
    }

    attempts.innerText = "Attempts: " + aantal++;

    const guessedNumberItem = document.createElement("li");
    guessedNumberItem.textContent = "🐈 " + guess;
    guessedNumbersList.appendChild(guessedNumberItem);

    guessInput.value = "";
};

playAgainButton.onclick = startGame;

startGame();
