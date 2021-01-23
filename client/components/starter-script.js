/* eslint-disable no-unused-vars */
const quizQuestions = [
  {
    questionText: 'A game of American football has how many TOTAL players on the field at any given time?',
    answerOptions: ['10', '18', '11', '22'],
    correctAnswer: 3,
    correctText: 'EACH team has 11 players, making a grand total of 22 players on the field at once.'
  },
  {
    questionText: 'The three phases of American football are:',
    answerOptions: ['Pitching, hitting, defense', 'Offense, defense, penalty-killing', 'Offense, defense, special teams', 'Offense, defense, coaching'],
    correctAnswer: 2,
    correctText: 'The three phases of American football are offense, defense, and special teams (kicking)!'
  },
  {
    questionText: 'A touchdown is worth how many points?',
    answerOptions: ['3', '6', '7', '2'],
    correctAnswer: 1,
    correctText: 'A touchdown is worth 6 points. After the touchdown itself is the PAT (Point After Touchdown) which can add 1 or 2 additional points.'
  },
  {
    questionText: 'How many points is a field goal worth?',
    answerOptions: ['3', '2', '6', '7'],
    correctAnswer: 0,
    correctText: 'A field goal is worth 3 points.'
  },
  {
    questionText: 'Which of the following is NOT a position in American football?',
    answerOptions: ['Quarterback', 'Wingback', 'Running back', 'Defensive end'],
    correctAnswer: 1,
    correct: 'While "wing" and "back" are both used separately, there is no such position as "wingback".'
  }
];

let correctUserAnswers;
const intro = document.querySelector('.intro');
const startBtn = document.querySelector('.start-btn');
const nextQuestionBtn = document.querySelector('.next-question-btn');
const mainMenuBtn = document.querySelector('.main-menu-btn');
const questionContainer = document.querySelector('.question-container');
const questionElement = document.querySelector('.question');
const explanationText = document.querySelector('.explanation');
const answerBtns = document.querySelector('.answers');
const finalScore = document.querySelector('.final-score');

let currentQuestion;

startBtn.addEventListener('click', startGame);
nextQuestionBtn.addEventListener('click', () => {
  currentQuestion++;
  nextQuestion();
});

function startGame() {
  correctUserAnswers = 0;
  currentQuestion = 0;
  startBtn.classList.add('d-none');
  nextQuestionBtn.classList.add('d-none');
  questionContainer.classList.remove('d-none');
  finalScore.classList.add('d-none');
  intro.classList.add('d-none');
  nextQuestion();
}

function nextQuestion() {
  resetPage();
  displayQuestion(quizQuestions[currentQuestion]);
}

function displayQuestion(question) {
  questionElement.innerText = question.questionText;
  answerBtns.classList.remove('disable');
  let i = 0;
  question.answerOptions.forEach(correctAnswer => {
    const button = document.createElement('button');
    button.innerText = question.answerOptions[i];
    button.classList.add('btn', 'btn-primary');
    if (i === question.correctAnswer) {
      button.dataset.correct = correctAnswer.correctAnswer;
    }
    button.addEventListener('click', selectAnswerHandler);
    answerBtns.appendChild(button);
    i++;
  });
}

function resetPage() {
  resetAnswerOptions(document.body);
  nextQuestionBtn.classList.add('d-none');
  explanationText.classList.add('d-none');
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function selectAnswerHandler(event) {
  const selectedAnswer = event.target;
  const correctChoice = selectedAnswer.dataset.correct;
  checkAnswer(document.body, correctChoice);
  Array.from(answerBtns.children).forEach(button => {
    checkAnswer(button, button.dataset.correct);
  });

  if (quizQuestions.length > currentQuestion + 1) {
    nextQuestionBtn.classList.remove('d-none');
    explanationText.classList.remove('d-none');
    answerBtns.classList.add('disable');
  } else {
    startBtn.innerHTML = 'Restart Quiz';
    startBtn.classList.remove('d-none');
    explanationText.classList.add('d-none');
    finalScore.classList.remove('d-none');
    mainMenuBtn.classList.remove('d-none');
    if (correctUserAnswers >= 4) {
      finalScore.innerHTML =
        `<div>You got ${correctUserAnswers} correct out of ${quizQuestions.length}.</div>
      <div>Swami Says: HE...COULD...GO...ALL...THE...WAY!! You have a good, basic understanding of American football!</div>`;
    } else if (correctUserAnswers === 2 || correctUserAnswers === 3) {
      finalScore.innerHTML =
        `<div>You got ${correctUserAnswers} correct out of ${quizQuestions.length}.</div>
      <div>Swami Says: WHOOP! You're...okay in your basic knowledge of American football</div>`;
    } else {
      finalScore.innerHTML =
        `<div>You got ${correctUserAnswers} correct out of ${quizQuestions.length}.</div>
      <div>Swami Says: You're rumblin', bumblin', stumblin'...try again!</div>`;
    }
  }
  if (selectedAnswer.dataset === correctChoice) {
    correctUserAnswers++;
  }
}

function checkAnswer(element, correct) {
  resetAnswerOptions(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.remove('wrong');
  }
}

function resetAnswerOptions(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}
