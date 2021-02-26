/* eslint-disable no-prototype-builtins */
const quizQuestions = [
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Omaha', 'Ohio', 'Nebraska', 'Indy'],
    picture: '../images/ohio.jpg',
    correctAnswer: 1,
    correctText: 'The "Ohio" route concept involves the outside receiver running a go route and the inside receiver running an out route.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Combo', 'Zone Buster', 'Spacing', 'Bunch'],
    picture: '../images/spacing.jpg',
    correctAnswer: 2,
    correctText: 'The "Spacing" route concept involves a combination of 3 closely-run routes designed to combat against zone defenses.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Stick', 'Small', 'Bunch Close', 'Curl'],
    picture: '../images/stick.jpg',
    correctAnswer: 0,
    correctText: 'The "Stick" route concept is a two-reciever combination that involves a stick (or curl) route and a flat route. Usually reserved for short yardage situations.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Crossers', 'Mesh', 'Double Drag', 'Man Beater'],
    picture: '../images/mesh.jpg',
    correctAnswer: 1,
    correctText: 'The "Mesh" route concept involves two receivers running across each other in short distance. Desgined to cause the defenders to run into each other.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Outs', 'Ins', 'Angles', 'Levels'],
    picture: '../images/levels.jpg',
    correctAnswer: 3,
    correctText: 'The "Levels" route concept has the furthest inside receiver run a medium-length in/dig route, with the other receivers running shorter in/dig routes.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Double Cross', 'Drive', 'Option', 'Double In'],
    picture: '../images/drive.jpg',
    correctAnswer: 1,
    correctText: 'The "Drive" route concept has the outside receiver running a shallow cross, and the other receiver running a longer dig/in route.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Curl Post', 'Short Long', 'Smash', 'Curl Corner'],
    picture: '../images/smash.jpg',
    correctAnswer: 2,
    correctText: 'The "Smash" route concept requires the inside receiver running a corner, and the outside receiver running a curl. This allows the QB two options to attack a zone',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Spot', 'Bunch', 'Spacing', 'Combo'],
    picture: '../images/spot.jpg',
    correctAnswer: 0,
    correctText: 'The "Spot" route concept is another trio of routes designed to attack zone coverage. This focuses on creating a 3-on-2 situation against the defense.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Ohio', 'Streak Out', 'In and Out', 'Dagger'],
    picture: '../images/dagger.jpg',
    correctAnswer: 3,
    correctText: 'The "Dagger" route concept uses the outside receiver running an in/dig route, and the inside receiver running a streak.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Verticals', 'All Go', 'All Streaks', 'Leroy Jenkins'],
    picture: '../images/verticals.jpg',
    correctAnswer: 0,
    correctText: 'The "Vericals" route concept is a simple deep pass concept that involes sending 3-4 receivers straight down the field.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Divide', 'Middle Deep', 'Dig Post', 'Mills'],
    picture: '../images/mills.jpg',
    correctAnswer: 3,
    correctText: 'The "Mills" route concept is a deep route concept designed for the defense to bite on the inside dig/in post in the hopes of opening up the outside post route.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following diagram shows WHICH route concept?',
    answerOptions: ['Overflow', 'All Right', 'Flood', 'Hi-Med-Lo'],
    picture: '../images/flood.jpg',
    correctAnswer: 2,
    correctText: 'The "Flood" route concept is a pouplar way to attack zone defense by "flooding" one side of the field with multiple options at different levels of the field.',
    material: 'Common Pass Routes and Route Combos',
    correctTextLink: 'https://www.xsosfootball.com/common-pass-routes-route-combos/'
  },
  {
    questionText: 'The following picture shows WHICH type of defense?',
    answerOptions: ['Cover 2', 'Cover 3', 'Cover 4', 'Man'],
    picture: '../images/cover-2.jpg',
    correctAnswer: 0,
    correctText: 'Cover 2 defense is a zone defense that is centered around two deep safeties each "cover"ing one half of the field. This is the basis of many defenses today.',
    material: 'Football Defensive Schemes: The Basics You Should Know',
    correctTextLink: 'https://www.stack.com/a/football-defensive-schemes-the-basics-you-should-know'
  },
  {
    questionText: 'The following picture shows WHICH type of defense?',
    answerOptions: ['Cover 2', 'Cover 3', 'Cover 4', 'Man'],
    picture: '../images/cover-4.png',
    correctAnswer: 2,
    correctText: 'Cover 4 defense is a zone defense that this time uses 4 defenders to cover the field equally. Usually used to defend the deep pass.',
    material: 'Football Defensive Schemes: The Basics You Should Know',
    correctTextLink: 'https://www.stack.com/a/football-defensive-schemes-the-basics-you-should-know'
  },
  {
    questionText: 'The following picture shows WHICH type of defense?',
    answerOptions: ['Cover 2', 'Cover 4', 'Man', 'Cover 3'],
    picture: '../images/man-to-man.png',
    correctAnswer: 2,
    correctText: 'Man defense is the opposite of zone defense - instead of a defender guarding one area of the field, the defender instead guards the individual opposing player.',
    material: 'Football Defensive Schemes: The Basics You Should Know',
    correctTextLink: 'https://www.stack.com/a/football-defensive-schemes-the-basics-you-should-know'
  },
  {
    questionText: 'The following picture shows WHICH type of defense?',
    answerOptions: ['Man', 'Cover 3', 'Cover 2', 'Cover 4'],
    picture: '../images/cover-3.png',
    correctAnswer: 1,
    correctText: 'Cover 3 defense is a zone defense that instead uses 3 defenders to each cover a third of the field.',
    material: 'Football Defensive Schemes: The Basics You Should Know',
    correctTextLink: 'https://www.stack.com/a/football-defensive-schemes-the-basics-you-should-know'
  },
  {
    questionText: 'The following sequence displays WHICH kind of defensive line concept (watch the two on the left)?',
    answerOptions: ['Swim', 'Swing', 'Sting', 'Stunt'],
    picture: '../images/dline-stunt.gif',
    correctAnswer: 3,
    correctText: 'A "stunt" is where two pass rushers switch courses to the quarterback to hopefully confuse the opposing offensive line.',
    material: 'A Stunt in Football - Definition and Explanation',
    correctTextLink: 'https://www.liveabout.com/about-football-glossary-stunt-1334113'
  },
  {
    questionText: 'The following sequence displays WHICH kind of running play concept?',
    answerOptions: ['Counter', 'Trap', 'Sweep', 'Dive'],
    picture: '../images/counter-run.gif',
    correctAnswer: 0,
    correctText: 'A "counter" is a popular type of running play that has the running back start runnign in one direction, but immediately flip the other way, thereby "countering" the defense. Also usually involes multiple offensive linemen "pulling" to the other side of the field as well.',
    material: 'A million ways to run counter',
    correctTextLink: 'https://www.footballstudyhall.com/2018/12/20/18147006/a-million-ways-to-run-counter-gt-counter-trey-oklahoma-memphis-ucf'
  },
  {
    questionText: 'The following sequence displays WHICH kind of running play concept?',
    answerOptions: ['Sweep', 'Power', 'Slam', 'Stretch'],
    picture: '../images/stretch-run.gif',
    correctAnswer: 3,
    correctText: 'A "stretch" is a type of zone running play that involves the entire offensive line running in the same direction and instead of blocking a specific person, block a "zone" in front of them.',
    material: '3 Keys to a Successful Stretch Play',
    correctTextLink: 'https://joedanielfootball.com/footballstretchplay/'
  },
  {
    questionText: 'The following play is a trick play known as...',
    answerOptions: ['Pass and Shoot', 'Hook and Ladder', 'Snakes on a Plane', 'Hot Potato'],
    picture: '../images/hook-n-ladder.gif',
    correctAnswer: 1,
    correctText: 'A "hook and ladder" (or sometimes called hook and lateral) is a trick play where the first receiver runs a set amount of yards on a curl (or hook), then laterals the ball to another player running to the outside.',
    material: 'Hook and ladder (football)',
    correctTextLink: 'https://en.wikipedia.org/wiki/Hook_and_ladder_(football)'
  }
];

const swamiSounds = [
  '../audio/back-back-back.mp3',
  '../audio/berman-whoop.mp3',
  '../audio/he-could-go-all-the-way.mp3',
  '../audio/hello.mp3'
];

let sound;

function generateRandomIndex() {
  return Math.floor((Math.random() * 4) + 1);
}

function playSound() {

  const randomIndex = generateRandomIndex(swamiSounds.length - 1);
  if (sound) {
    sound.pause();
  } else {
    sound = new Audio();
  }

  if (randomIndex === 1) {
    sound.src = '../audio/back-back-back.mp3';
  } else if (randomIndex === 2) {
    sound.src = '../audio/berman-whoop.mp3';
  } else if (randomIndex === 3) {
    sound.src = '../audio/he-could-go-all-the-way.mp3';
  } else if (randomIndex === 4) {
    sound.src = '../audio/hello.mp3';
  }
  sound.play();
}

const swamiTitle = document.querySelector('.swami-title');
const swamiTitle2 = document.querySelector('.swami-title-2');

swamiTitle.addEventListener('click', playSound);
swamiTitle2.addEventListener('click', playSound);

swamiTitle.addEventListener('click', () => {
  swamiTitle.classList.toggle('is-flipped');
});

swamiTitle2.addEventListener('click', () => {
  swamiTitle2.classList.toggle('is-flipped');
});

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
    if (correctUserAnswers >= 18) {
      finalScore.innerHTML =
        `<div>You got <b>${correctUserAnswers}</b> correct out of <b>${quizQuestions.length}</b>.</div>
      <div><b>Swami Says</b>: HE...COULD...GO...ALL...THE...WAY!! You're on your way to being inducted into the Hall of Fame!</div>`;
    } else if (correctUserAnswers >= 10 && correctUserAnswers < 18) {
      finalScore.innerHTML =
        `<div>You got <b>${correctUserAnswers} correct out of ${quizQuestions.length}</b>.</div>
      <div><b>Swami Says</b>: WHOOP! You're not bad in your advanced knowledge of American football! Keep watching and learning!</div>`;
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
