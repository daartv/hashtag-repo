import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import NewBillButton from '../components/NewBillButton'
import FriendsButton from '../components/FriendsButton'
import NavDropMenu from '../components/NavDropMenu'
import Login from '../containers/Login'

class MainNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: this.props.signedIn
    };
    this._handleLogin = this._handleLogin.bind(this);
  }

  _handleLogin(signIn, user) {
    this.props.onSignIn(signIn, user);
    this.setState({signedIn: signIn});
  }

  render() {

    return (
      <Navbar fluid className="navbar navbar-fixed-top navbar-default">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Splitly</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Login onSignIn={this._handleLogin}   />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavBar

