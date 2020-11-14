import React from 'react';
import Header from './header';

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
      case 'starter':
        return (
          <>
            {header}
          </>
        );
      case 'all-pro':
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
