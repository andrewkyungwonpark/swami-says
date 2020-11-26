import React from 'react';
import PropTypes from 'prop-types';

export default function QuestionCount(props) {
  return (
    <div className="question-count">
      Question <span>{props.counter} of {props.total}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};
