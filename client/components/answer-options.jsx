import React from 'react';
import PropTypes from 'prop-types';

export default function AnswerOptions(props) {
  return (
    <li className="answer-option">
      <input
        type="radio"
        className="radio-custom-btn"
        name="radio-group"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="custom-label" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOptions.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};
