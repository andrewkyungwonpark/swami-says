import React from 'react';
import Header from './header';
import MainMenu from './main-menu';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'main-menu',
      isLoaded: null
    };
    this.setDifficulty = this.setDifficulty.bind(this);
  }

  setDifficulty(difficulty) {
    this.setState(state => ({
      difficulty: difficulty,
      isLoaded: !this.state.isLoaded
    }));
  }

  render() {
    const header = <Header difficulty={this.setDifficulty} />;
    return (
      <>
        {header}
        <MainMenu difficultyf={this.setView} />
      </>
    );
  }
}
