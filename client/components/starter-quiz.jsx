import React from 'react';
import propTypes from 'prop-types';
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
              counter={props.questionId}
              total={props.questionTotal} />
            <Question
              content={props.question} />
            <ul className="answer-options">
              {props.AnswerOptions.map(renderAnswerOptions)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

StarterQuiz.propTypes = {
  answer: propTypes.string.isRequirde,
  AnswerOptions: propTypes.array.isRequired,
  counter: propTypes.number.isRequired,
  question: propTypes.string.isRequired,
  questionId: propTypes.number.isRequired,
  questionTotal: propTypes.number.isRequired,
  onAnswerSelected: propTypes.func.isRequired
};
