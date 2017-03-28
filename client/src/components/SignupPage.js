import React, { Component } from 'react';
import $ from 'jquery';
import style from './signupPage-css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountExistsMessage: '',
    };
    this._onSignUp = this._onSignUp.bind(this);
  }

  _onSignUp(event) {
    event.preventDefault();
    const userInfo = {
      username: this.username.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      password: this.password.value,
      email: this.email.value,
    };

    $.ajax({
      type: 'POST',
      url: '/users/signup',
      data: JSON.stringify(userInfo),
      contentType: 'application/json',
      success: (data) => {
        this.props.onSignIn(true);
      },
      error: (error) => {
        this.setState({accountExistsMessage: 'Account already exists. Use different username or email.'});
      }
    });
  }

  render() {

    return (
      <div className="signup-div" style={style.signUpDiv} >
        <h2>Sign Up</h2>
        <form
          action=""
          method=""
          onSubmit={this._onSignUp}  >
          <input
            placeholder="First name"
            type="text"
            style={style.signUpFLName}
            ref={input => this.firstName = input}
            required/>
          <input
            placeholder="Last name"
            type="text"
            style={style.signUpFLName}
            ref={input => this.lastName = input}
            required/>
          <input
            placeholder="Email"
            type="text"
            style={style.signUpInput}
            ref={input => this.email = input}
            required/>
          <input
            placeholder="Username"
            type="text"
            style={style.signUpInput}
            ref={input => this.username = input}
            required/>
          <input
            placeholder="Password"
            type="text"
            style={style.signUpInput}
            ref={input => this.password = input}
            required/>
          <input
            className="createAccountButton"
            type="submit"
            value="Create Account"
            style={style.createAccountButton} />
          <span style={style.signUpMessage}>{this.state.accountExistsMessage}</span>
        </form>
      </div>
      );
  }
}

export default SignupPage;
