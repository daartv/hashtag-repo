import React, { Component } from 'react';
// import style from './css-app';
import UserMain from './containers/UserPage';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // console.log(UserMain);
  }

  render () {
    return (
      <div className="container">
        <header className="app-header">
          <h1>
          hello  splitly (:
          </h1>
        </header>
        <UserMain />
      </div>
    );
  }
}

export default App

