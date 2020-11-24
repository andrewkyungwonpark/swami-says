import React from 'react';

export default class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'starter',
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      questions: [],
      correctAnswer: ''
    };
  }
}
