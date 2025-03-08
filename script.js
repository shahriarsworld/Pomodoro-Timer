// Selecting elements from the HTML
const timerDisplay = document.querySelector(".timerSection");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let timeLeft = 25 * 60; // 25 minutes in seconds
let timer; // Variable to store the timer function
let isRunning = false; // To check if the timer is running

// Function to update the timer display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = 
        `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Function to start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alert("Time's up! Take a break.");
            }
        }, 1000);
    }
}

// Function to pause the timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60; // Reset to 25 minutes
    updateDisplay();
}

// Adding event listeners to buttons
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Initialize the display when the page loads
updateDisplay();
