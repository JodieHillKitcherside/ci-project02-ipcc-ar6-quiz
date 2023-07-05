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
    questionCount(0);
    avaliableQuestions = [...question];
    currentScore(0);
    beginTimer(20);
}