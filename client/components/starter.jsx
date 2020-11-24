import React from 'react';

// eslint-disable-next-line no-unused-vars
const questions = [
  {
    questionText: 'A game of American football has how many TOTAL players on the field at any given time?',
    answerOptions: [
      { answerText: '10', isCorrect: false },
      { answerText: '18', isCorrect: false },
      { answerText: '11', isCorrect: false },
      { answerText: '22', isCorrect: true }
    ]
  },
  {
    questionText: 'The three phases of American football are:',
    answerOptions: [
      { answerText: 'Pitching, hitting, defense', isCorrect: false },
      { answerText: 'Offense, defense, penalty-killing', isCorrect: false },
      { answerText: 'Offense, defense, special teams', isCorrect: true },
      { answerText: 'Offense, defense, coaching', isCorrect: false }
    ]
  },
  {
    questionText: 'A touchdown is worth how many points?',
    answerOptions: [
      { answerText: '3', isCorrect: false },
      { answerText: '6', isCorrect: true },
      { answerText: '7', isCorrect: false },
      { answerText: '2', isCorrect: false }
    ]
  },
  {
    questionText: 'How many points is a field goal worth?',
    answerOptions: [
      { answerText: '3', isCorrect: true },
      { answerText: '2', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: false }
    ]
  },
  {
    questionText: 'Which of the following is NOT a position in American football?',
    answerOptions: [
      { answerText: 'Quarterback', isCorrect: false },
      { answerText: 'Wingback', isCorrect: true },
      { answerText: 'Running back', isCorrect: false },
      { answerText: 'Defensive end', isCorrect: false }
    ]
  }
];

export default class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'starter',
      counter: 0,
      questionId: 1,
      question: '',
      correctAnswer: ''
    };
  }
}
