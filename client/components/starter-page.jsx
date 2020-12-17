/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
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
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answerOptions[0]
    });
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

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
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

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'N/A' });
    }
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
