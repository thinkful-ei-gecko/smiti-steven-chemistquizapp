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
    correctAnswer: 'a',
    correctAnswerWritten: 'H2O'
  },
  {
    question: 'Which of these elements is the building block of life on earth?',
    answers: {
      a: 'Silicon',
      b: 'Nitrogen',
      c: 'Carbon',
      d: 'Potassium'
    },
    correctAnswer: 'c',
    correctAnswerWritten: 'Carbon'
  },
  {
    question: 'What is the main element in air?',
    answers: {
      a: 'Carbon',
      b: 'Nitrogen',
      c: 'Oxygen',
      d: 'Helium'
    },
    correctAnswer: 'b',
    correctAnswerWritten: 'Nitrogen'
  },
  {
    question: 'The symbol Ag stands for which element?',
    answers: {
      a: 'Agrillium',
      b: 'Gallium',
      c: 'Gold',
      d: 'Silver'
    },
    correctAnswer: 'd',
    correctAnswerWritten: 'Silver'
  },
  {
    question: 'Which of these elements react violently when exposed to water?',
    answers: {
      a: 'Gold',
      b: 'Sodium',
      c: 'Cesium',
      d: 'Helium'
    },
    correctAnswer: 'c',
    correctAnswerWritten: 'Cesium'
  },
  {
    question: 'Which of the following elements is considered a noble gas?',
    answers: {
      a: 'Neon',
      b: 'Oxygen',
      c: 'Hydrogen',
      d: 'Nitrogen'
    },
    correctAnswer: 'a',
    correctAnswerWritten: 'Neon'
  }
];

let counter = 0;
let score = 0;

function updateScore() {
  score++;
  $('.currentScore').text(`Current Score: ${score}`);
}

function updateQuestionNumber() {
  $('.questionCount').text(`Question ${counter + 1} of 6`);
}

/*
Once 'start quiz' button is pressed,
startQuiz function will pull up first question
create new box for question to live in
*/
function newQuestion() {
  $('button').on('click', function(event) {
    event.preventDefault();
    resultsPage();
    $('main').html(`
      <section class='questionView'>
        <h2 class='currentQuestion' aria-live='polite'>${STORE[counter].question}</h2>
      <form class='answerForm'>
        <label>
          <input type="radio" value="a" name="answer" aria-live='${STORE[counter].answers.a}'>
            <div class="hover">
            ${STORE[counter].answers.a}
            </div>
        </label>
        <label>
          <input type="radio" value="b" name="answer" aria-live='${STORE[counter].answers.b}'>
            <div class="hover">
            ${STORE[counter].answers.b}
            </div>
        </Label>
        <label>
          <input type="radio" value="c" name="answer" aria-live='${STORE[counter].answers.c}'>
            <div class="hover">
            ${STORE[counter].answers.c}
            </div>
        </label>
        <label>
          <input type="radio" value="d" name="answer" aria-live='${STORE[counter].answers.d}'>
            <div class="hover">
            ${STORE[counter].answers.d}
            </div>
        </label>
        <button class="submit-button">Submit Answer</button>
      </form>
      </section>
    `);
    updateQuestionNumber();
  });
}

/*
if user selects correct answer,
celebratory image pop up and a congratulatory text
 */
function selectedCorrectAnswer() {
  $('main').on('submit', 'form', function(event) {
    event.preventDefault();
    if(event.currentTarget.answer.value === STORE[counter].correctAnswer){
      updateScore();
      $('main').html(`
        <section class="result-box" >
          <h3 aria-live='polite'>Correct Answer!</h3>
          <img class="logo-box" src="thumpsup.svg" alt="thumps up icon"/>
          <button class="result-button">Next Question!</button>
        </section>
      `);
      nextQuestion();
      counter++;
    } else {
      $('main').html(`
      <section class="result-box">
        <h3 aria-live='polite'>Oh sorry! The correct answer was ${STORE[counter].correctAnswerWritten}! </h3>
        <img class="logo-box" src="thumpsdown.svg" alt="thumps down icon"/>
        <button  class="result-button">Next Question!</button>
      </section>
    `);
      nextQuestion();
      counter++;
    }
  });
}

/*
once 'continue button' is pressed,
new question is presented
*/
function nextQuestion() {
  newQuestion();
}

/*
Show results when counter is equal to STORE.length
*/
function resultsPage() {
  if (counter === STORE.length) {
    $('footer').hide();
    $('main').html(`
      <section class="result-box">
        <h3 aria-live='polite'>Your total score is ${score} out of a possible 6! </h3>
        <button class="result-button">Restart Quiz!</button>
      </section>
    `);
    restartQuiz();
  }
}

/*
Once 'restart quiz button' is pressed,
revert to starting point
*/
function restartQuiz() {
  $('.result-button').on('click', function () {
    counter = 0;
    score = 0;
    $('main').html(`
    <section class='startView'>
      <h2 class="titleQuiz" aria-live='polite'>Do you want take a Chemistry Quiz ? </h2>
      <button class="flex-button">Start Quiz</button>
    </section>
    `);
    $('footer').show();
    $('.currentScore').text('Current Score: 0');
    $('.questionCount').text('Question 0 of 6');
    newQuestion();
  });
} 

/*
run the quiz
*/
function runTheChemistQuiz() {
  newQuestion();
  selectedCorrectAnswer();
  nextQuestion();
  restartQuiz();
}

/*
document ready function
*/
$(runTheChemistQuiz);