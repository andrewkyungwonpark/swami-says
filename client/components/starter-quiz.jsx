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
    isFinished: false
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: QuizQuestions[this.state.currentQuestion].questionText,
          answer: QuizQuestions[this.state.currentQuestion].answer,
          answerOptions: QuizQuestions[this.state.currentQuestion].answerOptions
        };
      });
    }
  }

  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  }

  quizFinished = () => {
    if (this.state.currentQuestion === QuizQuestions.length - 1) {
      this.setState({
        isFinished: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }

  }

  render() {
    const { answerOptions, myAnswer, currentQuestion, isFinished } = this.state;

    // if(isFinished && this.state.score >= 4) {
    //   return (
    //   )
    // } else if (isFinished && this.state.score === 3 ) {
    //   return (

    //   )
    // } else if (isFinished && this.state.score <= 2) {
    // return (
    //   <div className="result">
    //     <h3>Game Over your Final score is {this.state.score} points </h3>
    //     <div>
    //       The correct answer's for the questions was
    //       <ul>
    //         {QuizQuestions.map((item, index) => (
    //           <li className="ui floating message options" key={index}>
    //             {item.answer}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // );
    // } else {
    return (
      <div className="App">
        <h1>{this.state.questions} </h1>
        <span>{`Questions ${currentQuestion}  out of ${QuizQuestions.length -
          1} remaining `}</span>
        {answerOptions.map(option => (
          <p
            key={option.id}
            className={`ui floating-msg
         ${myAnswer === option ? 'selected' : null}
         `}
            onClick={() => this.checkAnswer(option)}
          >
            {option}
          </p>
        ))}
        {currentQuestion < QuizQuestions.length - 1 && (
          <button
            className="inverted-btn"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHandler}
          >
            Next
          </button>
        )}
        {/* //add a finish button later */}
        {currentQuestion === QuizQuestions.length - 1 && (
          <button className="inverted-btn" onClick={this.finishHandler}>
            Finish
          </button>
        )}
      </div>
    );
  }
}
