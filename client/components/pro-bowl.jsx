import React from 'react';

export default class ProBowl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'pro-bowl',
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      questions: [],
      correctAnswer: ''
    };
  }
}
