import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import UserPage from './containers/UserPage';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import Main from './containers/Main';

import UserBillsTable from './containers/UserBillsTable';
import ViewBill from './components/ViewBill';
import FriendsList from './components/FriendsList';
import NewBill from './containers/NewBill';

import AddFriend from './containers/AddFriend';
import BillHistory from './containers/BillHistory';
import Settings from './containers/Settings';
import AddBill from './containers/AddBill';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signedIn: true
    }
    this.requireAuth = this.requireAuth.bind(this);
    this._onSignIn = this._onSignIn.bind(this);
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
  componentDidMount() {
    console.log(this.state.signedIn);
  }

  render () {
    return (
      <Router history={hashHistory}>
      <Route path='/'>
        <IndexRoute component={Main} signedIn={this.state.signedIn}/>
        <Route path='/login' component={LoginPage} signedIn={this.state.signedIn}/>
        <Route path='/signup' component={SignupPage} />

          {/* * * * * NAV BAR ITEMS * * * * */}
          <Route path='/userPage' component={UserPage} onEnter={this.requireAuth}>
          <IndexRoute component ={UserBillsTable} />
          <Route path='/viewBill' component={ViewBill} onEnter={this.requireAuth}/>
          <Route path='/friendsList' component={FriendsList} onEnter={this.requireAuth}/>
          <Route path='/newBill' component={NewBill} onEnter={this.requireAuth}/>
          <Route path='/addBill' component={AddBill} onEnter={this.requireAuth}/>

          {/* * * * * DROP DOWN MENU ITEMS * * * * */}
          <Route path='/addFriend' component={AddFriend} onEnter={this.requireAuth}/>
          <Route path='/billHistory' component={BillHistory} onEnter={this.requireAuth}/>
          <Route path='/settings' component={Settings} onEnter={this.requireAuth}/>
        </Route>
        </Route>
      </Router>
    );
  }
}

export default App

/* * * * * HASH HISTORY * * * * *

Regarding the random strings after the # in the address bar: this is a key that is used to look up persistent state data in window.sessionStorage between page loads. */

/* * * * * NAMED COMPONENTS * * * * *

WHen a route has one or more named components, the child elements are available by name on this.props. In this case, this.props.children will be undefined. All route components can participate in nesting.  */


