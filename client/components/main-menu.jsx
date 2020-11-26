import React from 'react';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'main-menu'
    };
  }

  render() {
    return (
      <>
        <div className="header d-flex justify-content-center row">
          <img className="swami-title" src="../images/swami.png"/>
          <h1 className="d-flex justify-content-center align-items-center white">
            Swami Says &#58; Choose Your Difficulty!
          </h1>
          <img className="swami-title" src="../images/swami.png" />
        </div>
        <div className="row justify-content-center d-flex">
          <div className="col-md-3 mb-3 d-flex">
            <div className="card">
              <img className="card-img-top" src="../images/nfl-logo.png" alt="NFL logo" />
              <div className="card-body">
                <h5 className="card-title">Starter</h5>
                <p className="card-text">5 questions of basic knowledge</p>
                <a onClick={() => { this.props.setView('starter'); }} className="btn btn-warning">Start Quiz!</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3 d-flex">
            <div className="card">
              <img className="card-img-top" src="../images/pro-bowl.png" alt="Pro Bowl Logo" />
              <div className="card-body">
                <h5 className="card-title">Pro Bowl</h5>
                <p className="card-text">10 questions of intermediate knowledge of football</p>
                <a onClick={() => { this.props.setView('pro-bowl'); }} className="btn btn-warning">Start Quiz!</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3 d-flex">
            <div className="card">
              <img className="card-img-top" src="../images/nfl-hof.png" alt="HOF Logo" />
              <div className="card-body">
                <h5 className="card-title">Hall of Fame</h5>
                <p className="card-text">20 questions of advanced concepts</p>
                <a onClick={() => { this.setView('hall-of-fame'); }} className="btn btn-warning">Start Quiz!</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainMenu;
