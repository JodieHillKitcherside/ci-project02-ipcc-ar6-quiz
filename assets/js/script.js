//importing modules
import { quiz } from "./questions.js";
import { explanations } from "./explanations.js";

//Js ordered in sequence of flowchart (see readme file)
// Page load, hide elements until clicked 
window.onload = function () {
    document.getElementById("quiz-area").style.display = 'none';
    document.getElementById("answer-explanation").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
};

//Constanants per function

const testKnowl = document.getElementById("test-knowl");
const startInterval = document.getElementById("timer");
const selectOption = document.getElementsByClassName("select-option");

testKnowl.addEventListener("click", function () {
    console.log("test-knowl")
    document.getElementById("quiz-bio").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
    document.getElementById("test-knowl").style.display = 'none';
    document.getElementById("quiz-area").style.display = 'block';
    questionNumber();
    question();
    startInterval();
    selectOption();
});

// note "quiz" is reffered to from questions.js and "explanations" refered to from "explanations.js"
/**
 * question number function implemented to:
 * select elements with id of "question-no"
 * filter quiz for "numb"s
 * loop through the question number for each object item (question)
 * print inner html to the correct question number 
 * for each question, add 1 to progress quiz 
 * start the loop at index of 0
 */

 function questionNumber() {
    const questionNumbers = document.getElementsByClassName('question-no');
    const numb = quiz.filter(item => item === "numb");
    questionNumbers.forEach((numb, index) => {
      questionNumber.innerHTML = index + 1;
    });
  }

/**
 * question  function implemented to:
 * select elements with id of "question" 
 * fiter quiz for "question"s object item (question)
 * loop through the question for each question 
 * print inner html to the correct question 
 * start the loop at index of 0
 */

 function question() {
    const displayQuestion = document.getElementsByClassName('question');
    const question = quiz.filter(item => item === "question");
    displayQuestion.forEach((question, index) => {
      displayQuestion.innerHTML = index + 1;
    });
  }

// start interval function is set to start timer

var count = 20;
var interval = setInterval(function() {
  document.getElementById('timer').innerHTML= count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('timer').innerHTML='Done';
    revealAnswer();
    revealExplanation();
  }
}, 2000);

/**
 * select option function implemented to:
 * select elements with id of "select-option"
 * filter quiz for "options" 
 * loop through the options for object item (question)
 * print inner html to the correct options array 
 * start the loop at index of 0
 */

 function displayOptions() {
    const displayOptions = document.getElementsByClassName('select-option');
    const options = quiz.filter(item => item === "options");
    displayOptions.forEach((options, index) => {
      displayOptions.innerHTML = index + 1;
    });
    function listOfOptions () {
        for (var i = 0; i < options.length; i++) {
          displayOptions.innerHTML += "<button>" + [i] + "</button>";
        }
      }
      listOfOptions();
  }

/**
 * identifies total correct element 
 * identifies answer from quiz 
 * checks when user clicks on the option
 * if answer correct - and 1 to total correct then proceed to reveal answer + explanation 
 * else answer incorrect - proceed to reveal answer + explanation 
 */

const totalCorrect = document.getElementById("correct-count");
const answer = quiz.filter(item => item === "answer");

displayOptions.addEventListener("click", function () {
    if (displayOptions = answer) {
        totalCorrect.innerHTML = totalCorrect + 1;
        revealAnswer();
        revealExplanation();
    }
    else {
        revealAnswer();
        revealExplanation();
    }
});

/** 
 * reveal answer function implemented to:
 * select correct answer from quiz 
 */

 function revealAnswer() {
    const revealAnswer = document.getElementsByClassName("answer");
    const correctAnswer = quiz.filter(item => item === "answer");
    revealAnswer.forEach((correctAnswer, index) => {
      revealAnswer.innerHTML = index + 1;
    })
};

/** 
 * reveal explanation function implemented to:
 * select correct answer from explanations
 */

 function revealExplanation() {
    const revealExplanation = document.getElementsByClassName("explanation");
    const correctExplanation = explanations.filter(item => item === "answer");
    revealExplanation.forEach((correctExplanation, index) => {
      revealExplanation.innerHTML = index + 1;
    })
};

/**
 * automatically checks if there is still a question, or if the quiz length has finished
 * if still a question from the quiz.dataset, js will return to testKnowl()
 * if not, js will proceed to final result takeaway
 */

function rereshQuestion () {
    questionNumber++;
    if (questionNumber , quiz.length) {
        questionNumber();
        question();
        startInterval();
        displayOptions();
    }
    else {
        questionNumber = 0;
        finalResultTakeaway();
    }
};

rereshQuestion();

/**
 * check if the total correct answers is more than 7 (50%), if so return a message 
 * if not, return other message 
 * both answers proceed to display result-takeaway and restart-quiz button
 */

const scoreStatement = document.getElementById("score-statment");
const showFinalScore = document.getElementById("final-result.Child");

function finalResultTakeaway() {
    showFinalScore.innerHTML = (totalCorrect());
    if (totalCorrect < 7) {
        document.getElementById("quiz-area").style.display = 'none';
        document.getElementById("quiz-bio").style.display = 'block';
        scoreStatement.innerHTML = "Amazing job! You scored more than 50% on the quiz.. Now it's time to put your knowledge in to action!";
        document.getElementById("result-takeaway").style.display = 'block';
        document.getElementById("restart-quiz").style.display = 'block';
    }
    else {
        document.getElementById("quiz-area").style.display = 'none';
        document.getElementById("quiz-bio").style.display = 'block';
        scoreStatement.innerHTML = "Better luck next time! You scored less than 50%, but that's really okay. We hope to have inspired you with more learnings!";
        document.getElementById("result-takeaway").style.display = 'block';
        document.getElementById("restart-quiz").style.display = 'block';
    }
}

// displays function to restart the quiz 

function restartQuiz () {
    testKnowl();
}
