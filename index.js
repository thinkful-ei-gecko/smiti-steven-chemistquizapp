'use strict';

const STORE = [
  {
    question: 'Water is needed to sustain human life. What is the chemical formula for water?',
    answers: {
      a: 'H2O',
      b: 'H2O2',
      c: 'HO',
      d: 'H3O+'
    },
    correctAnswer: 'a:'
  },
  {
    question: 'Which of these elements is the building block of life on earth?',
    answers: {
      a: 'Silicon',
      b: 'Nitrogen',
      c: 'Carbon',
      d: 'Potassium'
    },
    correctAnswer: 'c'
  },
  {
    question: 'What is the main element in air?',
    answers: {
      a: 'Carbon',
      b: 'Nitrogen',
      c: 'Oxygen',
      d: 'Helium'
    },
    correctAnswer: 'b'
  },
  {
    question: 'The symbol Ag stands for which element?',
    answers: {
      a: 'Agrillium',
      b: 'Gallium',
      c: 'Gold',
      d: 'Silver'
    },
    correctAnswer: 'd'
  },
  {
    question: 'Which of these elements react violently when exposed to water?',
    answers: {
      a: 'Gold',
      b: 'Sodium',
      c: 'Cesium',
      d: 'Helium'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Which of the following elements is considered a noble gas?',
    answers: {
      a: 'Neon',
      b: 'Oxygen',
      c: 'Hydrogen',
      d: 'Nitrogen'
    },
    correctAnswer: 'a'
  }
];

/*
Once 'start quiz' button is pressed,
startQuiz function will pull up first question
create new box for question to live in
*/
function startQuiz() {
  $('.flex-button').submit(function(event) {
    event.preventDefault();
    

  })
}

/*
if user selects correct answer,
celebratory image pop up and a congratulatory text
 */
function selectedCorrectAnswer() {}

/*
say selected answer was wrong,
state correct answer
*/
function selectedWrongAnswer() {}

/*
once 'continue button' is pressed,
new question is presented
*/
function nextQuestion() {}

/*
Once 'restart quiz button' is pressed,
revert to starting point
*/
function restartQuiz() {}

/*
run the quiz
*/
function runTheChemistQuiz() {
  startQuiz();
  selectedCorrectAnswer();
  selectedWrongAnswer();
  nextQuestion();
  restartQuiz();
}

/*
document ready function
*/
$(runTheChemistQuiz);
