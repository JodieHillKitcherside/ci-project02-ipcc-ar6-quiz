
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

/**
 * question number function implemented to:
 * select elements with id of "question-no"
 * log a questions number counter
 * loop through the question number for each question in the quiz array (question.js), assosciated as "numb"
 * print inner html to the correct question number 
 * for each question, add 1 to the questions number counter 
 * start the loop at index of 0
 */

function questionNumber() {
    const questionNumber = Array.from(document.getElementsById('question-no'));
    questionNumbersCounter = 0;
    questionNumberLoop = () => {
        questionNumber.forEach(questionNumber => {
        const number = quiz.dataset['numb'];
        questionNumber.innerHTML = quiz[numb];
        questionNumberCounter++;
  });
};
questionNumberLoop(0)
}

/**
 * question  function implemented to:
 * select elements with id of "question"
 * log a questions counter
 * loop through the question for each question in the quiz array (question.js), assosciated as "question"
 * print inner html to the correct question 
 * start the loop at index of 0
 */

function question() {
    const question = Array.from(document.getElementsById('question'));
    questionsCounter = 0;
    questionLoop = (_questionId) => {
        question.forEach(question => {
        const question = quiz.dataset['question'];
        question.innerHTML = quiz[question];
  });
};
questionLoop(0)
}

// start interval function is set to start timer

var count = 15;
var interval = setInterval(function(){
  document.getElementById('timer').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('timer').innerHTML='Done';
  }
}, 2000);

/**
 * select option function implemented to:
 * select elements with id of "select-option"
 * log a options counter
 * loop through the options for each question in the quiz array (question.js), assosciated as "options"
 * print inner html to the correct options array 
 * for each question, add 1 to the options counter 
 * start the loop at index of 0
 */

function selectOption() {
    const selectOption = Array.from(document.getElementsByClassName('select-option'));
    optionsCounter = 0;
    optionsLoop = () => {
        options.forEach(option => {
        const options = quiz.dataset['options'];
        selctOption.innerHTML = quiz[options];
        optionsCounter++;
  });
};
optionsLoop(0)
}

/**
 * statements 
 * if answer correct - and 1 to totalCorrect then proceed to reveal answer + explanation 
 * else answer incorrect - proceed to reveal answer + explanation 
 */
const selectOption = document.getElementById("answer");
const totalCorrect = document.getElementById("correct-count");

selectOption.addEventListener("click", () => {
    if (selectOption = correctAnswer) {
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
 * select correct answer from quiz array (questions.js)
 */

 function revealAnswer() {
    const revealAnswer = Array.from(document.getElementsByClassName('answer'));
    answersLoop = () => {
        answer.forEach(answer => {
        const answer = quiz.dataset['answer'];
        answer.innerHTML = quiz[answer];
        for (let i = 0; i < answers.length; i++) {
            if (selectOption === answers[i])
            result = true;
        }
  });
};
answersLoop(0)
};

/** 
 * reveal explanation function implemented to:
 * select correct answer from explanation array (explanations.js)
 */

 function revealExplanation() {
    const revealExplanation = Array.from(document.getElementsByClassName('explanation'));
    answersLoop = () => {
        answer.forEach(answer => {
        const answer = quiz.dataset['answer'];
        answer.innerHTML = quiz[answer];
  });
};
answersLoop(0)
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
        selectOption()
    }
    else {
        questionNumber = 0;
        finalResultTakeaway();
    }
};

/**
 * check if the total correct answers is more than 7 (50%), if so return a message 
 * if not, return other message 
 * both answers proceed to display result-takeaway and restart-quiz button
 */

function finalResultTakeaway() {
    if (totalCorrect < 7) {
        document.getElementById("quiz-area").style.display = 'none';
        document.getElementById("quiz-bio").style.display = 'block';
        scoreStatement.innerHTML = "Amazing job! You scored more than 50% on the quiz.. Now it's time to put your knowledge in to action!"
        document.getElementById("result-takeaway").style.display = 'block';
        document.getElementById("restart-quiz").style.display = 'block';
    }
    else {
        document.getElementById("quiz-area").style.display = 'none';
        document.getElementById("quiz-bio").style.display = 'block';
        scoreStatement.innerHTML = "Better luck next time! You scored less than 50%, but that's really okay. We hope to have inspired more learning and provided you with key takeaways."
        document.getElementById("result-takeaway").style.display = 'block';
        document.getElementById("restart-quiz").style.display = 'block';
    }
}

// displays function to restart the quiz 

function restartQuiz () {
    testKnowl();
}
