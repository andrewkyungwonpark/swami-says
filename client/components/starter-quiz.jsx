/* eslint-disable no-unused-vars */
import React from 'react';
import { QuizQuestions } from './quiz-questions';

class StarterQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };
}
