/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
const quizQuestions = [
  {
    questionText: 'What is this route is called?',
    answerOptions: ['Post', 'Sweep', 'Slant', 'Corner'],
    picture: '../images/slant-route.png',
    correctAnswer: 2,
    correctText: 'A "slant" route is when the receiver takes several steps forwards and then breaks at an angle inside, towards the middle of the field. Usually used in short-yardage situations.',
    material: 'Routes in American football',
    correctTextLink: 'https://www.stack.com/a/route-tree'
  },
  {
    questionText: 'What is this route is called?',
    answerOptions: ['Square', 'Right', 'Angle', 'Out'],
    picture: '../images/out-route.png',
    correctAnswer: 3,
    material: 'Routes in American football',
    correctText: 'Usually ran at a depth of 10-15 yards, the "out" route is utilized to get the receiver on the OUTside part of the field. Usually ran at as close to a 90-degree angle as possible.',
    correctTextLink: 'https://www.stack.com/a/route-tree'
  },
  {
    questionText: 'What is this route is called?',
    answerOptions: ['Corner', 'Post', 'Flag', 'Angle Out'],
    picture: '../images/post-route.png',
    correctAnswer: 1,
    material: 'Routes in American football',
    correctText: 'A "post" route is a route used for bigger passing plays, and gets its name from the fact that the receiver runs in a straight line, and then towards the direction of the field goal post.',
    correctTextLink: 'https://www.stack.com/a/route-tree'
  },
  {
    questionText: 'What is this route is called?',
    answerOptions: ['Right', 'Middle', 'Square', 'In'],
    picture: '../images/in-dig-route.png',
    correctAnswer: 3,
    material: 'Routes in American football',
    correctText: 'Also known as a "dig", the "in" route is the direct opposite of the "out" route (crazy, I know)!',
    correctTextLink: 'https://www.stack.com/a/route-tree'
  },
  {
    questionText: 'The SQUARE in this diagram represents which position?',
    answerOptions: ['Nose tackle', 'Center', 'Running back', 'Tight end'],
    picture: '../images/curl-route.png',
    correctAnswer: 1,
    material: 'Routes in American football',
    correctText: 'The square is used to signify the CENTER, or the offensive lineman who snaps the football to the quarterback.',
    correctTextLink: 'https://www.stack.com/a/route-tree'
  },
  {
    questionText: 'A holding penalty on the offense results in what kind of penalty?',
    answerOptions: ['15 yards back from spot of the foul and loss of down',
      '10 yards back from spot of the foul and repeat down',
      '5 yards back from spot of foul and repeat down',
      'None of the above'
    ],
    picture: '../images/holding-penalty.jpg',
    correctAnswer: 1,
    material: 'the holding penalty',
    correctText: 'A holding penalty on the offense results in a 10 yard penalty and a repeat of the down.',
    correctTextLink: 'https://en.wikipedia.org/wiki/Holding_(American_football)'
  },
  {
    questionText: 'This route is called',
    answerOptions: ['Streak', 'Fly', 'Go', 'All of the above'],
    picture: '../images/fly-route.png',
    correctAnswer: 3,
    material: 'Routes in American football',
    correctText: '"Streak", "Fly", and "Go" are all widely-used terms used to describe a route that goes vertically straight down the field.',
    correctTextLink: 'https://www.stack.com/a/route-tree'
  },
  {
    questionText: 'The penalty known as "intentional grounding" results in what kind of penalty?',
    answerOptions: ['15 yards & repeat down against the offense',
      '10 yards  & repeat down against the defense',
      '15 yards & loss of down against the offense',
      'Penalty at the spot of the foul & loss of down against the offense'
    ],
    picture: '../images/intentional-grounding.jpg',
    correctAnswer: 3,
    material: 'the intentional grounding penalty',
    correctText: 'An "intentional grounding" penalty results in a loss of down, and loss of yards based on where the foul was committed.',
    correctTextLink: 'https://en.wikipedia.org/wiki/Intentional_grounding'
  },
  {
    questionText: 'In which situation does the game clock NOT stop?',
    answerOptions: ['Going out of bounds at any given time',
      'Incomplete pass',
      'Stepping out of bounds with under 2 minutes left in the first half',
      'Stepping out of bounds with under 5 minutes left in the second half'
    ],
    picture: '../images/game-clock.gif',
    correctAnswer: 0,
    material: 'the game clock in American football',
    correctText: 'If a player with the ball steps out of bounds and there are more than 2 minutes left in the first half OR more than 5 minutes left in the second half, the clock will keep running. All incomplete passes will stop the clock.',
    correctTextLink: 'https://americanfootballdatabase.fandom.com/wiki/Running_out_the_clock'
  },
  {
    questionText: 'The “play clock” is how long in duration?',
    answerOptions: ['25 seconds', '30 seconds', '15 seconds', '40 seconds'],
    picture: '../images/play-clock.png',
    correctAnswer: 3,
    material: 'the play clock in American football',
    correctText: 'The play clock resets at 40 seconds after the completion of a down.',
    correctTextLink: 'https://en.wikipedia.org/wiki/Play_clock'
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
const answerBtns = document.querySelector('.pro-bowl-answers');
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
    explanationText.innerHTML = `<p><b>Swami says: </b>${question.correctText}<br><b>Read more about it here: </b><a href="${question.correctTextLink}" target="_blank">${question.material}</a></br></p>`;
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
    if (correctUserAnswers >= 9) {
      finalScore.innerHTML =
        `<div>You got <b>${correctUserAnswers}</b> correct out of <b>${quizQuestions.length}</b>.</div>
      <div><b>Swami Says</b>: HE...COULD...GO...ALL...THE...WAY!! You have a good, basic understanding of American football!</div>`;
    } else if (correctUserAnswers >= 5 && correctUserAnswers < 9) {
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
