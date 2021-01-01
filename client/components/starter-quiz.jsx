/* eslint-disable no-unused-vars */
import React from 'react';
import { QuizQuestions } from './quiz-questions';

class StarterQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    answerOptions: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuizQuestions = () => {
    this.setState(() => {
      return {
        questions: QuizQuestions[this.state.currentQuestion].questionText,
        answer: QuizQuestions[this.state.currentQuestion].answer,
        answerOptions: QuizQuestions[this.state.currentQuestion].answerOptions
      };
    });
  };

  componentDidMount() {
    this.loadQuizQuestions();
  }

  nextQuestion = () => {
    const { myAnswer, answer, score } = this.state;
    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
  }
}
