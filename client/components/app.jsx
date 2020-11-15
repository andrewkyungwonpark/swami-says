import React from 'react';
import Header from './header';
import MainMenu from './main-menu';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      view: 'main-menu'
    };
    this.setView = this.setView.bind(this);
  }

  setView(params) {
    this.setState(state => ({
      view: params
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
          </>
        );
      case 'pro-bowl':
        return (
          <>
            {header}
          </>
        );
      case 'hall-of-fame':
        return (
          <>
            {header}
          </>
        );
    }
  }
}
