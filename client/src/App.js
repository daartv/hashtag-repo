import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import axios from 'axios';
import $ from 'jquery';

import UserPage from './containers/UserPage';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import Main from './containers/Main';

/* * * * I DIDN'T TAKE OUT ANY OF THESE FUNCTIONS, THOUGH I CHANGE THE NAME OF ONE - ISLOGGEDIN()
I'LL LET YOU FINALIZE THE AUTHENTICATION SPECIFICS, THOUGH PROVIDED ISLOGGEDIN RETURNS TRUE OR FALSE, THE ROUTING WILL WORK.

RIGHT NOW, THE ROUTES WILL AUTOMATICALLY REDIRECT TO THE USER'S PAGE IF ISLOGGEDIN RETURNS TRUE - MEANING THEY HAVE A VALID SESSION OR ARE LOGGED IN. ALL NESTED ROUTES WITHIN /HOME (e.g., HOME/BILLHISTORY, HOME/FRIENDS ETC.) ARE ALSO PROTECTED. PLEASE DON'T CHANGE THE STRUCTURE OF THESE ROUTES, AS REACT ROUTER VERSION 4 IS A BITCH :) :) :)  * * * */


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      signedIn: true,
      user: null
    }
    this.isLoggedIn();
    this.requireAuth = this.requireAuth.bind(this);
    this._onSignIn = this._onSignIn.bind(this);
  }


  /* * * UNTIL WE ARE CORRECTLY CHECKING THE SESSION, ALTER THE RETURN VALUE TO MIMIC A VALID OR INVALID SESSION * * * */
  isLoggedIn (){
      return false
    // $.ajax({
    //   type: 'GET',
    //   url: '/users/checkStatus',
    //   contentType: 'application/json',
    //   success: (data) => {
    //     // this.setState({showUserPage: true});
    //     console.log('WORKED', data);
        // this.setState({signedIn: data.signedIn});
    //   },
    //   error: (error) => {
    //     console.log('_onSignUp error');
    //     this.setState({accountExistsMessage: 'Account already exists. Use different username or email.'});
    //   }
    // });
  }

  _onSignIn(signIn) {
    if (signIn) {
      this.setState({signedIn: signIn});
    }
  }

  requireAuth(nextState, replace) {
  if (!this.state.signedIn) {
    replace({
      pathname: '/login'
    })
  }
}

checkSession() {
  if (this.isLoggedIn()) {
    return <Redirect to='/home'/>;
  } else {
    return <Main />;
  }

}

componentDidMount() {
    // console.log(UserPage);
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' render={this.checkSession.bind(this)}/>
          <Route path='/home' component={UserPage}/>
          <Route path='/home/' render={this.checkSession.bind(this)}/>
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
        </div>
      </Router>
    );
  }
}

export default App

