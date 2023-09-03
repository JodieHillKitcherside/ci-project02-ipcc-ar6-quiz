// importing modules
import { quiz } from "./questions.js";
import { explanations } from "./explanations.js";

const testKnowl = document.getElementById("test-knowl");
const nextQuestion = document.getElementById("next-question");
let questionNumber = 0;

// js ordered in sequence of flowchart (see readme file)
// page load, hide elements until clicked 
window.onload = function () {
    document.getElementById("quiz-area").style.display = 'none';
    document.getElementById("answer-explanation").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
};

testKnowl.addEventListener("click", function () {
    document.getElementById("quiz-bio").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
    document.getElementById("test-knowl").style.display = 'none';
    document.getElementById("quiz-area").style.display = 'block';

    // start quiz by calling the next question
    displayNextQuestion()
});

let totalCorrect = 0;
let questionsRemaining = quiz.length;

function displayNextQuestion() {
    // clear all options if they exist, this removes the old event listener
    const optionArea = document.querySelector("#option-select-area");
    optionArea.innerHTML = '';

    const currentQuestion = quiz[questionNumber];
    // set the question
    document.querySelector('#question-text').innerHTML = currentQuestion.question;

    // set the options with the class name of "select-option"
    currentQuestion.options.forEach(option => {
        optionArea.innerHTML += `<button class="select-option">${option}</button>`;
    });

    // set the total correct and questions remaining 
    document.querySelector('#questions-count').innerHTML = questionsRemaining;
    document.querySelector('#correct-count').innerHTML = totalCorrect;

    // add the event listeners to the options
    const options = document.querySelectorAll(".select-option");

    // when the option is clicked call the check answer function
    options.forEach(option => option.addEventListener("click", checkAnswer));
};

function checkAnswer() {
    document.getElementById("quiz-area").style.display = 'block';
    const currentQuestion = quiz[questionNumber];
    const questionAnswer = currentQuestion.answer;
    const clickedAnswer = this.innerHTML;

    // compare the questionAnswer with the clicked element answer
    if (questionAnswer === clickedAnswer) {
        // increase score if correct
        totalCorrect++;
        // increase the question number
        questionNumber++;
        // decrease quesitons remaining 
        questionsRemaining--;
        // display correct answer and explanation 
        revealAnswer();
        revealExplanation();
        // delay 5 seconds for user to read
        setTimeout(function(){
        }, 3000); 
        // block quiz bio
        document.getElementById("quiz-bio").style.display = 'none !important;';
        // call the next question only if the the question number is less than the number of items in the quiz array
        if (questionNumber > quiz[questionNumber].length) {
            // increase the question number to the next index in the loop
            questionNumber++;
            displayNextQuestion();
        }
        // decide if the game is over
        else {
            finalResultTakeaway();
        }
    }
    else {
        // increase the question number
        questionNumber++;
        // decrease quesitons remaining 
        questionsRemaining--;
        // display correct answer and explanation 
        revealAnswer();
        revealExplanation();
        // delay 5 seconds for user to read
        setTimeout(function(){
        }, 500); 
        // call the next question only if the the question number is less than the number of items in the quiz array
        if (questionNumber > quiz[questionNumber].length) {
            displayNextQuestion();
        }
        // decide if the game is over
        else {
            finalResultTakeaway();
        }
    }
};

// start interval function is set to start timer
var count = 20;
var interval = setInterval(function() {
    // get the timer id to associate as the count
    document.getElementById('timer').innerHTML= count;
    // count backward -1
    count--;
    if (count === 0){
        // clear interval when count is ) and state done
        clearInterval(interval);
        document.getElementById('timer').innerHTML='Done';
        // if user has not selected in time and answer is done, reveal answer and explanation
        revealAnswer();
        revealExplanation();}
}, 2000);

const currentAnswer = quiz[questionNumber].answer;
const currentExplanation = explanations[questionNumber].answer;

function revealAnswer() {
    // display answer and explanation area 
    document.getElementById("quiz-area").style.display = 'block'
    document.getElementById("answer-explanation").style.display = 'block';

    // set the answer
    document.querySelector('.answer').innerHTML = currentAnswer;
    console.log();
};

function revealExplanation() {
    // set the explanation
    document.querySelector('.explanation').innerHTML = currentExplanation;
    console.log();
};

nextQuestion.addEventListener("click", function () {
    // goes to the next question if the quiz is not yet finished
    if (questionNumber > quiz.length) {
        questionNumber++;
        displayNextQuestion();
    }
    // goes to the final result + ends quiz
    else {
        questionNumber = 0;
        finalResultTakeaway();
    }
    // start quiz by calling the next question
    displayNextQuestion()
});

function finalResultTakeaway () {
    const scoreStatement = document.getElementById("score-statement");

    // hide quiz bio and quiz area 
    document.getElementById("quiz-area").style.display = 'none';
    document.getElementById("quiz-bio").style.display = 'block';

    // display final result area
    document.getElementById("result-takeaway").style.display = 'block';
    document.getElementById("restart-quiz").style.display = 'block';

    // display the score 
    document.querySelector('#final-result').innerHTML = totalCorrect;

    if (totalCorrect > 7) {
        scoreStatement.innerHTML = "Amazing job! You scored more than 50% on the quiz.. Now it's time to put your knowledge in to action!";
    }
    else {
      scoreStatement.innerHTML = "Better luck next time! You scored less than 50%, but that's really okay. We hope to have inspired you with more learnings!";
    }
    console.log();
};

let restartQuiz = document.getElementById('restart-quiz');
restartQuiz.addEventListener("click", displayNextQuestion());