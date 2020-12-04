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
    const shuffleAnswers = quizQuestions.map(question => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffleAnswers[0]
    });
  }

  shuffleArray(arr) {
    let currentIndex = arr.length;
    let tempValue;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempValue;
    }
    return arr;
  }

  handleAnswerSelected(event) {
    this.selectAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState(state => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answerCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].questionText,
      answerOptions: quizQuestions[counter].answerOptions,
      answer: ''
    });
  }

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
