import React, { Component } from 'react';
import style from './css-app';
import UserPage from './containers/UserPage';

const { container } = style


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // console.log(UserPage);
  }

  render () {
    return (
      <div style={container}>
        <UserPage />
      </div>
    );
  }
}

export default App

