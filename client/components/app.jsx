import React from 'react';
import Header from './header';
import MainMenu from './main-menu';
import Starter from './starter';
import ProBowl from './pro-bowl';
import HallOfFame from './hall-of-fame';

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
    const header = <Header mainMenu={this.setView} />;
    switch (this.state.view) {
      case 'main-menu':
        return (
          <>
            {header}
            <MainMenu setView={this.setView} />
          </>
        );
      case 'starter':
        return (
          <>
            {header}
            <Starter setView={this.setView} />
          </>
        );
      case 'pro-bowl':
        return (
          <>
            {header}
            <ProBowl setView={this.setView} />
          </>
        );
      case 'hall-of-fame':
        return (
          <>
            {header}
            <HallOfFame setView={this.setView} />
          </>
        );
    }
  }
}
