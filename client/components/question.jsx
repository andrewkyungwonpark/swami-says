import React from 'react';
import PropTypes from 'prop-types';

export default function Question(props) {
  return (
    <h2 className="question">{props.content}</h2>
  );
}

Question.PropTypes = {
  content: PropTypes.string.isRequired
};
