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

    displayQuestion(); // start quiz by calling the next question
});

/**
 * START QUESTION 
 * Select first question number, question, options prefix, select options and start timer (Index 0)
 * Questions to be selected in order from questions.js
 * Populate inner html 
 * Start timer
 * 
 */
function displayQuestion() {
    setInterval(timerInterval);
    const optionArea = document.querySelector("#option-select-area");ƒ
    optionArea.innerHTML = '';

    for (var i = 0; i < quiz.length; i += 1) {
        function getQuestion() {
            var currentQuestion = document.getElementById("question-text");
            return currentQuestion.innerHTML = quiz[i].question;
        } // sets the function to retrive and loop through each question in the quiz array
        currentQuestion.options.forEach(option => {
            optionArea.innerHTML += `<button class="select-option">${option}</button>`;
        }); // sets the function to retrive the correct select options  and sets each option as a button
    }
    currentQuestionIndex++;
    timer();
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
            document.querySelector('#questions-count').innerHTML = questionsRemaining; // set the questions remaining 
            document.querySelector('#correct-count').innerHTML = totalCorrect; // set the total correct 
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





const options = document.querySelectorAll("select-option"); // add the event listeners to the options

options.forEach(option => option.addEventListener("click", checkAnswer)); // when the option is clicked call the check answer function


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
 * READ NEXT QUESTION
 * Event listener for next question clicked by user
 * Check if question number is less than questions length
 * If yes, continue, reveal next question (questions+1)
 * If no, result takeaway
*/

