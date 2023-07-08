//Js ordered in sequence of flowchart (see readme file)
// Page load, hide elements until clicked 
window.onload = function () {
    document.getElementById("quiz-area").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
};

//Constanants per function

const testKnowl = document.getElementById("test-knowl");
const questionNumber = document.getElementById("question-no");
const question = document.getElementById("question");
const startInterval = document.getElementById("timer");
const choicePrefix = document.getElementById("choice-prefix");
const selectOption = document.getElementById("selectOption");

testKnowl.addEventListener("click", function () {
    console.log("test-knowl")
    document.getElementById("quiz-bio").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
    document.getElementById("text-knowl").style.display = 'none';
    document.getElementById("quiz-area").style.display = 'block';
    questionNumber();
    question();
    startInterval();
    choicePrefix();
    selectOption()
});

function questionNumber() {
    import {quiz} from './questions.js'
}
