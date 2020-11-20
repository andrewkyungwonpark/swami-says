import React from 'react';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'main-menu'
    };
    this.changeDifficulty = this.changeDifficulty.bind(this);
  }

  changeDifficulty(event) {
    event.preventDefault();
    if (`${this.state.difficulty}` === event.target.value) {
      this.setState({
        difficulty: event.target.value
      });
    }
  }

  render() {
    return (
      <>
        <h1 className="justify-content-center align-items-center">
        Choose Your Difficulty!
        </h1>
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="../server/images/nfl-logo.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Starter</h5>
            <p className="card-text">5 questions of basic knowledge (i.e. basic rules) </p>
            <a href="#" className="btn btn-primary">Start Quiz!</a>
          </div>
        </div>
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="../server/images/pro-bowl.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Pro Bowl</h5>
            <p className="card-text">10 questions of intermediate knowledge of football (i.e. types of routes, etc.) </p>
            <a href="#" className="btn btn-primary">Start Quiz!</a>
          </div>
        </div>
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="../server/images/nfl-hof.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Hall of Fame</h5>
            <p className="card-text">20 questions of advanced concepts (i.e. route combinations, etc.) </p>
            <a href="#" className="btn btn-primary">Start Quiz!</a>
          </div>
        </div>
      </>
    );
  }
}

export default MainMenu;
