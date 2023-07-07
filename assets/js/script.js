// Quiz area
let timer = document.getElementbyId("timer");
const quizArea = document.getElementbyId("quiz-area");

// Question
let questionNo = document.getElementbyId("question-no");
const questionText = document.getElementbyId("question-text");

// Mulitple choice options
const optionSelectArea = document.getElementbyId("options-select-area");
const selectOption = document.getElementsbyClass("select-option");
const choicePrefix = document.getElementsbyClass("choice-prefix");

// Recurring result area
const resultsArea = document.getElementbyId("results-area");
const questionsCount = document.getElementbyId("questions-count");
const correctCount = document.getElementbyId("correct-count");

// Quiz bio and landing info
const quizBio = document.getElementbyId("quiz-bio");
const testKnowl = document.querySelector("#test-knowl");
const nextQuestionButton = document.getElementbyId("next-question");

//Final result area
const finalResultArea = document.getElementbyId("final-result-area");
const finalResult = document.getElementbyId("final-result");
const restartQuiz = document.getElementbyId("restart-quiz");

// Page load, hide elements until clicked 
window.onload = () => {
    document.getElementById("quiz-area").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
};

// Fluctuating variable numbers 
questionNo = 0;
let userScore = undefined;

// All Buttons 

// Start quiz button "Test Your Knowledge Here"

// Options loop, start question function and testknowl event listener 

const optionText = document.getElementsbyClass("option-text");
optionsCounter = 0;

optionsLoop = () => {
    optionText.forEach(option => {
        option = quiz.dataset.option;
        optionText.innerHTML = quiz.options.option;
        optionsCounter++;
    }
    );
};

function startQuestion() {
    questionNo.innerText = questionNo + 1 + ".";
    questionText.innerText = quiz[index].question;
    optionsLoop();
    timer = 0;
};

testKnowl.addEventListener("click", () => {
    quizBio.style.display = 'none';
    finalResultArea.style.display = 'none';
    quizArea.style.display = 'block';
    questionsCount(questionNumber);
    startQuestion();
    optionsLoop();
    currentScore(0);
    console.log("testKnowl clicked");
});

// Questions count
questionsCount(); {
    let remainingQ = document.getElementById("remaining-questions");
    let remainingQTag = `<span>${quiz[questionNumber].numb}</span>`;
    remainingQ.innerHTM = remainingQTag;
}

// Refresh (each question and corresponding mulitple choice options) as new question loads
function refreshQuestion() {
    questionsCount(1);
    showScore(0);

}

/**
 * New question function:
 * Load new question and corresponding multiple choice options
 * Each new question group should be new from the questions.js
 * Loop to stop asking when quiz questions stop */

refreshQuestion();


/**
 * Reveal answer function:
 * Sets the event listener for the select options buttons and validates correct or incorrect ??
 * Displays correct answer and explanation
 * Diables select option buttons when user clicks answer ??
 * Shows the next question button when user clicks answer ??
 */

const answerText = document.getElementsbyClass("answer");
answerCounter = 0;

answerLoop = () => {
    answerText.forEach(answer => {
        answer = quiz.dataset.answer;
        answerText.innerHTML = quiz.answers.answer;
        answerCounter++;
    }
    );
};

const explanationText = document.getElementsbyClass("explanation-text");
explanationCounter = 0;

explanationsLoop = () => {
    explanationText.forEach(explanation => {
        explanation = quiz.dataset.explanation;
        explanationText.innerHTML = quiz.explanations.explanation;
        explanationCounter++;
    }
    );
};

revealAnswer.addEventListener("click", () => {
    answerLoop();
    explanationLoop();
    startQuestion();
    currentScore(0);
    [...selectOption].forEach(option => {
        let correctAnswer = [quiz.questionNumber].answer;
        if (optionText === correctAnswer) {
            userScore++;
            clearInterval();
            event.target.classList.add("correct");
        }
        else {
            event.target.classList.add("correct");
            for (i = 0, i < allOptions; i === {
                if(optionsSelectArea.children[i].textContent == correctAnswer) {
                optionsSelectArea.children[i].classList.add('correct');
                optionsSelectArea.children[i].classList.add('disabled');
            }
        });
}
    });
console.log("revealAnswer clicked");
});



// Restart quiz button
restartQuiz.addEventListener("click", () => {
    testKnowl();
});

// Timer function 
// add alert ??
timer = () => {
    if (timer === 20) {
        clearInterval(interval);
        next_question.click();
    }
    else {
        timer++;
        timer.innerText = timer;

    }
};

// Final result and result takeaway functions 
function finalResultArea() {
    quizBio.style.display = 'none';
    quizArea.style.display = 'none';
}