import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import UserPage from './components/UserPage';
import SignupPage from './components/SignupPage';
import Main from './components/Main';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      signedIn: false,
      user: null
    }
    // this.isLoggedIn();
    // this.requireAuth = this.requireAuth.bind(this);
    this._onSignIn = this._onSignIn.bind(this);
  }

  isLoggedIn (){
    if (this.state.signedIn) {
      return true;
    } {
      $.ajax({
        type: 'GET',
        url: '/users/checkStatus',
        contentType: 'application/json',
        success: (data) => {
          this.setState({signedIn: data.signedIn, user: data.user});
        },
        error: (error) => {
          console.log('checkUserLogged: user has no session');
          // this.setState({accountExistsMessage: 'Account already exists. Use different username or email.'});
        }
      });
    }
  }

  _onSignIn(signIn, user) {
    if (signIn) {
      this.setState({signedIn: signIn, user: user});
    }
  }

    checkSession() {
    if (this.isLoggedIn()) {
      return <Redirect to='/home'/>;
    } else {
      return <Redirect to='/hello'/>;
    }
  }

  componentDidMount() {

  }
  /* * * THIS WAY WE CAN PASS PROPS THROUGH THE ROUTE * * */
    redirectToMain() {
      return <Main signedIn={this.state.signedIn} onSignIn={this._onSignIn} />
    }


  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' render={this.checkSession.bind(this)}/>
          <Route path='/hello' render={this.redirectToMain.bind(this)} />
          <Route path='/home' component={UserPage}/>
          <Route path='/home/' render={this.checkSession.bind(this)}/>
          <Route path='/signup' component={SignupPage} />
        </div>
      </Router>

    );
  }
}

export default App

