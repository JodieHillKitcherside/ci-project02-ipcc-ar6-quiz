import { quiz } from "./questions.js";
import { explanations } from "./explanations.js";

// Constant 
// Constant and variables declared
const testKnowl = document.getElementById("test-knowl");
const nextQuestion = document.getElementById("next-question");
let questionNumber = 0;
let totalCorrect = 0;
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

    displayNextQuestion(); // start quiz by calling the next question
});

/**
 * DISPLAY NEXT QUESTION
 * Reveal question number, question, options prefix, select options and start timer
 * Questions to be selected in order from questions.js
 */
function displayNextQuestion() {
    const optionArea = document.querySelector("#option-select-area"); // clear all options if they exist, this removes the old event listener
    optionArea.innerHTML = '';

    const currentQuestion = quiz[questionNumber]; // set the question
    nextQuestion = (currentQuestion + 1) % quiz.length;
    quiz[nextQuestion];
    document.querySelector('#question-text').innerHTML = nextQuestion.question;

    // set the options with the class name of "select-option"
    nextQuestion.options.forEach(option => {
        optionArea.innerHTML += `<button class="select-option">${option}</button>`;
    });

    document.querySelector('#questions-count').innerHTML = questionsRemaining; // set the questions remaining 
    document.querySelector('#correct-count').innerHTML = totalCorrect; // set the total correct 

    const options = document.querySelectorAll(".select-option"); // add the event listeners to the options

    options.forEach(option => option.addEventListener("click", checkAnswer)); // when the option is clicked call the check answer function
}

/**
 * READ SELECTED OPTION
 * * Event listener for user selected option
 * If correct +tally, +total correct and alert user
 * If incorrect option, -tally, alert user
 */


/**
 * REVEAL ANSWER 
 * Display none question, final result, quiz bio
 * Reveal corresponding answer from questions.js
 * Reveal corresponding explanation from explanations.js
 */


/**
 * READ NEXT QUESTION
 * Event listener for next question clicked by user 
 * Check if question number is less than questions length
 * If yes, continue, reveal next question (questions+1)
 * If no, result takeaway
*/

