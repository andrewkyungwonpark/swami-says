const quizQuestions = [
  {
    difficulty: 'starter',
    questionText: 'A game of American football has how many TOTAL players on the field at any given time?',
    answerOptions: [
      { answerText: '10' },
      { answerText: '18' },
      { answerText: '11' },
      { answerText: '22' }
    ],
    answer: 3,
    correctText: 'Correct! EACH team has 11 players, making a grand total of 22 players on the field at once.'
  },
  {
    difficulty: 'starter',
    questionText: 'The three phases of American football are:',
    answerOptions: [
      { answerText: 'Pitching, hitting, defense' },
      { answerText: 'Offense, defense, penalty-killing' },
      { answerText: 'Offense, defense, special teams' },
      { answerText: 'Offense, defense, coaching' }
    ],
    answer: 2,
    correctText: 'Correct! The three phases of American football are offense, defense, and special teams (kicking)!'
  },
  {
    difficulty: 'starter',
    questionText: 'A touchdown is worth how many points?',
    answerOptions: [
      { answerText: '3' },
      { answerText: '6' },
      { answerText: '7' },
      { answerText: '2' }
    ],
    answer: 1,
    correctText: 'Correct! A touchdown is worth 6 points. After the touchdown itself is the PAT (Point After Touchdown) which can add 1 or 2 additional points.'
  },
  {
    difficulty: 'starter',
    questionText: 'How many points is a field goal worth?',
    answerOptions: [
      { answerText: '3' },
      { answerText: '2' },
      { answerText: '6' },
      { answerText: '7' }
    ],
    answer: 0,
    correctText: 'Correct! A field goal is worth 3 points.'
  },
  {
    diffiulty: 'starter',
    questionText: 'Which of the following is NOT a position in American football?',
    answerOptions: [
      { answerText: 'Quarterback', isCorrect: false },
      { answerText: 'Wingback', isCorrect: true },
      { answerText: 'Running back', isCorrect: false },
      { answerText: 'Defensive end', isCorrect: false }
    ],
    answer: 1,
    correct: 'Correct! While "wing" and "back" are both used separately, there is no such position as "wingback".'
  }
];

export default quizQuestions;
