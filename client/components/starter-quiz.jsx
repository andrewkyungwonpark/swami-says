import React from 'react';
import PropTypes from 'prop-types';
import Question from './question';
import QuestionCount from './question-count';
import AnswerOptions from './answer-options';

export default function StarterQuiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOptions
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  return (
    <div className="row justify-content-center d-flex">
      <div className="col-md-6 mb-3 d-flex">
        <div className="card">
          <div className="card-body">
            <QuestionCount
              counter={this.props.questionId}
              total={this.props.questionTotal} />
            <Question
              content={this.props.question} />
            <ul className="answer-options">
              {props.AnswerOptions.map(renderAnswerOptions)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

StarterQuiz.PropTypes = {
  answer: PropTypes.string.isRequirde,
  AnswerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};
