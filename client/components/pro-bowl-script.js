/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
const quizQuestions = [
  {
    questionText: 'What is this route is called?',
    answerOptions: ['Post', 'Sweep', 'Slant', 'Corner'],
    picture: '../images/slant-route.png',
    correctAnswer: 2,
    correctText: 'EACH team has 11 players, making a grand total of 22 players on the field at once.'
  },
  {
    questionText: 'What is this route is called?',
    answerOptions: ['Square', 'Right', 'Angle', 'Out'],
    picture: '../images/out-route.png',
    correctAnswer: 3,
    correctText: 'The three phases of American football are offense, defense, and special teams (kicking)!'
  },
  {
    questionText: 'What is this route is called?',
    answerOptions: ['Corner', 'Post', 'Flag', 'Angle Out'],
    picture: '../images/post-route.png',
    correctAnswer: 1,
    correctText: 'A touchdown is worth 6 points. After the touchdown itself is the PAT (Point After Touchdown) which can add 1 or 2 additional points.'
  },
  {
    questionText: 'What is this route is called?',
    answerOptions: ['Right', 'Middle', 'Square', 'In'],
    picture: '../images/in-dig-route.png',
    correctAnswer: 3,
    correctText: 'A field goal is worth 3 points.'
  },
  {
    questionText: 'The SQUARE in this diagram represents which position?',
    answerOptions: ['Nose tackle', 'Center', 'Running back', 'Tight end'],
    picture: '../images/curl-route.png',
    correctAnswer: 1,
    correctText: 'While "wing" and "back" are both used separately in American Football, there is no such position as "wingback".'
  },
  {
    questionText: 'A holding penalty on the offense results in what kind of penalty?',
    answerOptions: ['15 yards back from spot of the foul and loss of down',
      '10 yards back from spot of the foul and repeat down',
      '5 yards back from spot of foul and repeat down',
      'None of the above'],
    correctAnswer: 1,
    correctText: 'While "wing" and "back" are both used separately in American Football, there is no such position as "wingback".'
  },
  {
    questionText: 'This route is called',
    answerOptions: ['Streak', 'Fly', 'Go', 'All of the above'],
    correctAnswer: 3,
    correctText: '"Streak", "Fly", and "Go" are all widely-used terms used to describe a route that goes vertically straight down the field.'
  },
  {
    questionText: 'The penalty known as "intentional grounding" results in what kind of penalty?',
    answerOptions: ['15 yards & repeat down against the offense',
      '10 yards  & repeat down against the defense',
      '15 yards & loss of down against the offense',
      'Penalty at the spot of the foul & loss of down against the offense'],
    correctAnswer: 3,
    correctText: 'An "intentional grounding" penalty results in a loss of down, and loss of yards based on where the foul was committed.'
  },
  {
    questionText: 'In which situation does the game clock NOT stop?',
    answerOptions: ['Player with the ball stepping out of bounds at any given time',
      'Incomplete pass',
      'Player with the ball stepping out of bounds with under 2 minutes left in the first half',
      'Player with ball stepping out of bounds with under 5 minutes left in the second half'],
    correctAnswer: 0,
    correctText: 'If a player with the ball steps out of bounds and there are more than 2 minutes left in the first half OR more than 5 minutes left in the second half, the clock will keep running. All incomplete passes will stop the clock.'
  },
  {
    questionText: 'The “play clock” is how long in duration?',
    answerOptions: ['25 seconds', '30 seconds', '15 seconds', '40 seconds'],
    correctAnswer: 3,
    correctText: 'The play clock resets at 40 seconds after the completion of a down.'
  }
];

let correctUserAnswers;
const intro = document.querySelector('.intro');
const startBtn = document.querySelector('.start-btn');
const nextQuestionBtn = document.querySelector('.next-question-btn');
const mainMenuBtn = document.querySelector('.main-menu-btn');
const questionContainer = document.querySelector('.question-container');
const questionPhoto = document.querySelector('.photo');
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
  questionContainer.classList.add('card');
  mainMenuBtn.classList.add('d-none');
  finalScore.classList.add('d-none');
  intro.classList.add('d-none');
  nextQuestion();
}

function nextQuestion() {
  resetPage();
  displayQuestion(quizQuestions[currentQuestion]);
}

function displayQuestion(question) {
  questionElement.innerHTML = `<h3>${question.questionText}</h3>`;
  questionPhoto.innerHTML = `<img src="${question.picture}">`;
  answerBtns.classList.remove('disable');
  let i = 0;
  if (question.hasOwnProperty('correctText')) {
    explanationText.innerHTML = `<p><b>Swami says: </b>${question.correctText}</p>`;
  }
  question.answerOptions.forEach(correctAnswer => {
    const button = document.createElement('button');
    button.innerText = question.answerOptions[i];
    button.classList.add('btn', 'btn-primary');
    if (i === question.correctAnswer) {
      button.dataset.correct = correctAnswer.correct;
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
  const correct = selectedAnswer.dataset.correct;
  if (selectedAnswer.hasAttribute('data-correct')) {
    correctUserAnswers++;
  }
  checkAnswer(document.body, correct);
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
    explanationText.classList.remove('d-none');
    if (correctUserAnswers >= 4) {
      finalScore.innerHTML =
        `<div>You got <b>${correctUserAnswers}</b> correct out of <b>${quizQuestions.length}</b>.</div>
      <div><b>Swami Says</b>: HE...COULD...GO...ALL...THE...WAY!! You have a good, basic understanding of American football!</div>`;
    } else if (correctUserAnswers === 2 || correctUserAnswers === 3) {
      finalScore.innerHTML =
        `<div>You got <b>${correctUserAnswers} correct out of ${quizQuestions.length}</b>.</div>
      <div><b>Swami Says</b>: WHOOP! You're...okay in your basic knowledge of American football</div>`;
    } else {
      finalScore.innerHTML =
        `<div>You got <br>${correctUserAnswers} correct out of ${quizQuestions.length}</b>.</div>
      <div><b>Swami Says</b>: You're rumblin', bumblin', stumblin'...try again!</div>`;
    }
  }
}

function checkAnswer(element, correct) {
  resetAnswerOptions(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function resetAnswerOptions(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}
