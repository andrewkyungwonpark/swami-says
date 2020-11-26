import React from 'react';

export default class HallOfFame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'hall-of-fame',
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      questions: [],
      correctAnswer: ''
    };
  }
}
