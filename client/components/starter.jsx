/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Question from './question';
import QuestionCount from './question-count';
import AnswerOptions from './answer-options';

export default class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'starter',
      counter: 0,
      questionId: 1,
      question: '',
      correctAnswer: ''
    };
  }

  render() {
    return (
      <div className="row justify-content-center d-flex">
        <div className="col-md-6 mb-3 d-flex">
          <div className="card">
            <div className="card-body">
              <QuestionCount />
              <Question />
              <AnswerOptions />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
