// Get element by Id/Class/QuerySelector

// Quiz area
const timer = document.getElementbyId("timer");
const quizArea = document.getElementbyId("quiz-area");
const selectOption = document.getElementbyClass("select-option");
const question = document.getElementbyClass("question");
const choicePrefix = document.getElementbyClass("choice-prefix");

// Recurring result area
const resultsArea = document.getElementbyId("results-area");
const questionsCount = document.getElementbyId("questions-count");
const correctCount = document.getElementbyId("correct-count");

// Quiz bio and landing info
const quizBio = document.getElementbyId("quiz-bio");
const testKnowl = document.getElementbyId("test-knowl");

//Final result area
const finalResultArea = document.getElementbyId("final-result-area");
const finalResult = document.getElementbyId("final-result");
const restartQuiz = document.getElementbyId("restart-quiz");

// Get elements by query selector 

// Fluctuating variable numbers 
let questionNumber = 0;
let userScore = 0;

// buttons 
// Start quiz button "Test Your Knowledge Here"

function testKnowl() {
    quizBio.style.display = 'none';
    finalResultArea.style.display = 'none';
    quizArea.style.display = 'block';
    showQuestions(0);
    questionsCount(questionNumber);
    currentScore();
    beginTimer(20);
}

// Quiz select option button

function selectOption() {

}

// Next question button 

function nextQuestion() {
    questionNumber++;
    if (questionNumber, quiz.length) {
        showQuestions(questionNumber);
        currentScore();
        clearInterval(timer);
        startTimer(20);
    }
    else {
        questionNumber = 0;
        showResult();
    }
}

// Restart quiz button 

function restartQuiz() {

}

// Set timer to 20 secs on each question
let counter;
let seconds;
let elapsedTime = 0;

/**
 * The beginTimer() function restarts after each new question,
 * if no option is selected, this will display the correct answer, ??
 * and disables the selectOption(). ??
 * This then shows the nextQuestion() button. ??
 */

let sec = 20;
timer = setInterval(beginTimer, 1000);

function beginTimer(time) {
    document.getElementbyId("timer").innerHTML = sec + "sec left";
    sec--;
    if (sec = -1) {
        clearInterval(time);
        alert("Time's up! Try the next question!");
    }
}




