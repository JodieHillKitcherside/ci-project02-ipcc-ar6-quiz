// Import modules 
import { quiz } from "./questions.js";
import { explanations } from "./explanations.js";

// Constant 
const testKnowl = document.getElementById("test-knowl");
const nextQuestion = document.getElementById("next-question");
let questionNumber = 0;

/**
 * WINDOW ONLOAD
 * Display none for question, answer explanation, final result
 * Load quiz bio and test knowledge as expected
 **/
 window.onload = function () {
    document.getElementById("quiz-area").style.display = 'none';
    document.getElementById("answer-explanation").style.display = 'none';
    document.getElementById("final-result-area").style.display = 'none';
};

/**
 * TEST KNOWL - START QUIZ
 * Event listener for test knowledge button clicked by user
 * Display none answer explanation, final result, quiz bio
 * Reveal question number, question, options prefix, select options and start timer
 * Questions to be selected in order from questions.js
 */


/**
 * READ SELECTED OPTION
 * Event listener for user selected option
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


/**
 * REVEAL FINAL RESULT 
 * Display none question, quiz bio, answer explanation
 * Total questions correct
 * If more than 50% - message 
 * If less than 50% - message  
 */


/**
 * READ RESTART QUIZ
 * Event listener for restart quiz 
 * Display none none for quiz area, final result area
 */

