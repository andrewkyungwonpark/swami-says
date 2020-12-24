import React from 'react';
import QuizQuestions from './quiz-questions';

export default class StarterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'starter',
      correctAnswers: 0,
      quizQuestions: []
    };
  }

  componentDidMount() {
    this.setState({
      quizQuestions: QuizQuestions
    });
  }

  // render() {

  // }
}
