import { quiz } from "./questions.js";
import { explanations } from "./explanations.js";

// Constant 
// Constant and variables declared
const testKnowl = document.getElementById("test-knowl");
const nextQuestion = document.getElementById("next-question");
let currentQuestionIndex;
let questionNumber;
let totalCorrect;
let questionsRemaining = quiz.length;

/**
 * WINDOW ONLOAD
 * TEST KNOWL - START QUIZ
 * Event listener for test knowledge button clicked by user
 * Display none answer explanation, final result, quiz bio
 * Call first question
 */
testKnowl.addEventListener("click", function () {
    document.getElementById("quiz-bio").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
    document.getElementById("answer-explanation").style.display = 'none';

    startQuestion(); // start quiz by calling the next question
});

/**
 * START QUESTION 
 * Reveal first question number, question, options prefix, select options and start timer
 * Questions to be selected in order from questions.js
 */
function startQuestion() {
    // Select item 0 from the questions list 
    // Populate question number, question and selected options 
    setInterval(timerInterval);
    const currentQuestion = quiz[questionNumber]; // set question number 1

    document.querySelector('#question-text').innerHTML = nextQuestion.question;
    currentQuestionIndex++;
    timer();
}

/**
 * DISPLAY NEXT QUESTION
 * Reveal next question number, question, options prefix, select options and reset timer
 * Questions to be selected in order from questions.js
 */

function displayNextQuestion() {
    const optionArea = document.querySelector("#option-select-area"); // clear all options if they exist, this removes the old event listener
    optionArea.innerHTML = '';

    for (var q = 0; q < quiz[questionNumber].length; q++) {



    }



    // set the options with the class name of "select-option"
    nextQuestion.options.forEach(option => {
        optionArea.innerHTML += `<button class="select-option">${option}</button>`;
    });

    document.querySelector('#questions-count').innerHTML = questionsRemaining; // set the questions remaining 
    document.querySelector('#correct-count').innerHTML = totalCorrect; // set the total correct 

    const options = document.querySelectorAll("select-option"); // add the event listeners to the options

    options.forEach(option => option.addEventListener("click", checkAnswer)); // when the option is clicked call the check answer function
}

function resetQuizContent() {
    quizArea = document.querySelector("#quiz-area");
    quizArea.innerHTML = '';
}

function nextQuestion() {
    resetQuizContent(); // resets the quiz area every time 
    clearInterval(timerInterval); // stops the timer from continuing
    if (currentQuestionIndex < 15) {
        // resetQuizContent();
        // display next question from array?
        nextQuestion = (currentQuestion + 1) % quiz.length;
        quiz[nextQuestion];
        document.querySelector('#question-text').innerHTML = nextQuestion.question;
        currentQuestionIndex++;
        timer();
    } else {
        finalResult();
    }
}

/**
 * READ SELECTED OPTION
 * Event listener for user selected option
 * If correct +tally, +total correct and alert user
 * If incorrect option, -tally, alert user
 */
options.addEventListener("click", function () {
    document.getElementById("quiz-area").style.display = 'block';
    const questionAnswer = currentQuestion.answer;
    const clickedAnswer = this.innerHTML;
    const shortDelay = setInterval(func, 3000);

    while (true) {
        if (questionAnswer === clickedAnswer) {
            totalCorrect++;
            questionNumber++;
            questionsRemaining--;
            revealAnswer();
            shortDelay;
        }
        else {
            finalResultTakeaway();
        }
    }
});

/**
 * REVEAL ANSWER
 * Reveal corresponding answer from questions.js
 * Reveal corresponding explanation from explanations.js
 */
function revealAnswer() {
    revealAnswer();
    revealExplanation();
}


/**
 * READ NEXT QUESTION
 * Event listener for next question clicked by user
 * Check if question number is less than questions length
 * If yes, continue, reveal next question (questions+1)
 * If no, result takeaway
*/

