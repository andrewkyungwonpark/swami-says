/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Question from './question';
import QuestionCount from './question-count';
import AnswerOptions from './answer-options';
import StarterQuiz from './starter-quiz';
import quizQuestions from './quiz-questions';

export default class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'starter',
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {

  }

  // handleAnswerSelected(event) {
  //   this.selectAnswer(event.currentTarget.value);
  //   if (this.state.questionId < quizQuestions.length) {
  //     setTimeout
  //   }
  // }

  render() {
    return (
      <StarterQuiz
        answer={this.state.answer}
        AnswerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
}
