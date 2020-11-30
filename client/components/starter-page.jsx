/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Question from './question';
import QuestionCount from './question-count';
import AnswerOptions from './answer-options';
import quizQuestions from './quiz-questions';

export default class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'starter',
      counter: 0,
      questionId: 1,
      question: '',
      AnswerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
  }

  render() {
    return (
      <div className="row justify-content-center d-flex">
        <div className="col-md-6 mb-3 d-flex">
          <div className="card">
            <div className="card-body">
              <QuestionCount
                counter={this.props.questionId}
                total={this.props.questionTotal}/>
              <Question
                content={this.props.question}/>
              <ul className="answer-options">
                {/* {this.props.AnswerOptions.map(renderAnswerOptions)} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Starter.propTypes = {
  //   answer: PropTypes.string.isRequired,
  //   AnswerOptions: PropTypes.array.isRequired,
  //   counter: PropTypes.number.isRequired,
  //   question: PropTypes.string.isRequired,
  //   questionId: PropTypes.number.isRequired,
  //   questionTotal: PropTypes.number.isRequired,
  //   onAnswerSelected: PropTypes.func.isRequired
}
