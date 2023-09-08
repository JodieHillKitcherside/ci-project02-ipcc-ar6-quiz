import { quiz } from "./questions.js";
import { explanations } from "./explanations.js";

// Constant 
// Constant and variables declared
const testKnowl = document.getElementById("test-knowl");
const currentQuestion = document.getElementById("question");
const currentQuestionIndex = document.getElementById("total-correct");
const nextQuestion = document.getElementById("next-question");
let currentQuestionIndex;
let questionNumber;
let totalCorrect;
let questionsRemaining = quiz.length;

// Global reset quiz content 
function resetQuizContent() {
    const quizArea = document.querySelector("#quiz-area");
    quizArea.innerHTML = '';
}

/**
 * WINDOW ONLOAD
 * TEST KNOWL - START QUIZ
 * Event listener for test knowledge button clicked by user
 * Display none answer explanation, final result, quiz bio
 * Show quiz area
 * Call first question
 */
testKnowl.addEventListener("click", function () {
    document.getElementById("quiz-bio").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
    document.getElementById("answer-explanation").style.display = 'none';
    document.getElementById("quiz-area").style.display = 'block';

    displayQuestion(); // start quiz by calling the first question in loop
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
    setInterval();
    const optionArea = document.querySelector("#option-select-area");
    optionArea.innerHTML = '';
  
  	function getQuestion() {
            var currentQuestion = document.getElementById("question-text");
            currentQuestion.innerHTML = quiz[i].question;
      			return currentQuestion;
        } // sets the function to retrive and loop through each question in the quiz array

    for (var i = 0; i < quiz.length; i += 1) {
        currentQuestion.options.forEach(option => {
            optionArea.innerHTML += `<button class="select-option">${option}</button>`;
        }); // sets the function to retrive the correct select options  and sets each option as a button
    }
    getQuestion();
    currentQuestionIndex++;
}

/**
 * READ SELECTED OPTION
 * Event listener for user selected option
 * If correct +tally, +total correct and alert user
 * If incorrect option, -tally, alert user
 */
const clickedAnswer = this.innerHTML;
clickedAnswer.addEventListener("click", function () {
    document.getElementById("quiz-area").style.display = 'block';
    const questionAnswer = currentQuestion.answer;
    const clickedAnswer = this.innerHTML;
    const shortDelay = setInterval(func, 3000);

    while (true) {
        if (questionAnswer === clickedAnswer) {
            document.querySelector('#questions-count').innerHTML = questionsRemaining; // set the questions remaining 
            document.querySelector('#correct-count').innerHTML = totalCorrect; // set the total correct 
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
 * Display none quiz-area, quiz bio
 * Reveal corresponding answer from questions.js
 * Reveal corresponding explanation from explanations.js
 */
const currentAnswer = quiz[questionNumber].answer;
const currentExplanation = explanations[questionNumber].answer;

function revealExplanation() {
    document.querySelector('.explanation').innerHTML = currentExplanation;
}

function revealAnswer() {
    // Sort html to take answer exp out of quiz area 
    document.getElementById("quiz-bio").style.display = 'block';
    document.getElementById("final-result-area").style.display = 'block';
    document.querySelector('.answer').innerHTML = currentAnswer;
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
nextQuestion.addEventListener("click", function () {
    resetQuizContent();
   	if (questionNumber > quiz.length) {
          questionNumber++;
          displayQuestion();
        }
		else { 
        finalResultTakeaway();
    }
});

/**
 * FINAL RESULT TAKEAWAY
 * Display none quiz bio, quiz area
 * Display final score
 * Based on final score, reveal message
 */
function finalResultTakeaway() {
    const scoreStatement = document.getElementById("score-statement");
    document.getElementById("quiz-area").style.display = 'none';
    document.getElementById("quiz-bio").style.display = 'none';
    document.getElementById("result-takeaway").style.display = 'block';
    document.getElementById("restart-quiz").style.display = 'block';

    document.querySelector('#final-result').innerHTML = totalCorrect;

    if (totalCorrect > 7) {
        scoreStatement.innerHTML = "Amazing job! You scored more than 50% on the quiz.. Now it's time to put your knowledge in to action!";
    }
    else {
        scoreStatement.innerHTML = "Better luck next time! You scored less than 50%, but that's really okay. We hope to have inspired you with more learnings!";
    }
}

/**
 * RESTART QUIZ BUTTON
 * Bring back to quiz bio and test knowl option
 */
let restartQuiz = document.getElementById('restart-quiz');
restartQuiz.addEventListener("click", function () {
    document.getElementById("quiz-area").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
    document.getElementById("answer-explanation").style.display = 'none';
});