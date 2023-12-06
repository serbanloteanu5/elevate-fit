/******************************************************************************
 * File: sophisticated_code.js
 * Description: This code generates an interactive quiz with a timer and score tracking.
 * Author: Assistant.ai
 ******************************************************************************/

// Define the quiz questions with their options and correct answers
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    correctAnswer: "Jupiter"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Hg", "Pt"],
    correctAnswer: "Au"
  },
  // ... Add more questions as desired
];

// Define the quiz timer values
const quizTimer = {
  totalTime: 60, // Total quiz time in seconds
  interval: null, // To store the setInterval ID for the timer
  elapsedSeconds: 0 // Counter to keep track of elapsed time
};

// Define a variable to track the user's score
let score = 0;

// Function to display a question with options
function displayQuestion(index) {
  const questionContainer = document.getElementById("question-container");
  
  // Clear previous question
  questionContainer.innerHTML = "";
  
  // Create question element
  const question = document.createElement("h2");
  question.innerHTML = quizQuestions[index].question;
  questionContainer.appendChild(question);
  
  // Create options elements
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");
  quizQuestions[index].options.forEach((option, optionIndex) => {
    const optionElement = document.createElement("button");
    optionElement.innerHTML = option;
    optionElement.addEventListener("click", () => checkAnswer(option, index));
    optionsContainer.appendChild(optionElement);
  });
  questionContainer.appendChild(optionsContainer);
}

// Function to check the selected answer
function checkAnswer(selectedOption, questionIndex) {
  if (selectedOption === quizQuestions[questionIndex].correctAnswer) {
    score++;
  }
  
  // Move to the next question
  if (questionIndex < quizQuestions.length - 1) {
    displayQuestion(questionIndex + 1);
  } else {
    // End of the quiz
    endQuiz();
  }
}

// Function to start the quiz timer
function startTimer() {
  quizTimer.interval = setInterval(() => {
    quizTimer.elapsedSeconds++;
    
    // Update the timer display
    const timerDisplay = document.getElementById("timer-display");
    timerDisplay.innerHTML = formatTime(quizTimer.elapsedSeconds);
    
    // Check if the time is up
    if (quizTimer.elapsedSeconds >= quizTimer.totalTime) {
      endQuiz();
    }
  }, 1000);
}

// Function to format time in MM:SS format
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Function to end the quiz
function endQuiz() {
  clearInterval(quizTimer.interval);
  
  // Clear the question container
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";
  
  // Display final score
  const scoreDisplay = document.createElement("h2");
  scoreDisplay.innerHTML = `Final Score: ${score}/${quizQuestions.length}`;
  questionContainer.appendChild(scoreDisplay);
}

// Main function to start the quiz
function startQuiz() {
  // Display timer
  const timerDisplay = document.createElement("h2");
  timerDisplay.setAttribute("id", "timer-display");
  document.body.appendChild(timerDisplay);
  
  // Display initial score
  const scoreDisplay = document.createElement("h2");
  scoreDisplay.innerHTML = `Score: ${score}/${quizQuestions.length}`;
  document.body.appendChild(scoreDisplay);
  
  // Display quiz questions
  displayQuestion(0);
  
  // Start the timer
  startTimer();
}

// Call the startQuiz function to begin the quiz
startQuiz();