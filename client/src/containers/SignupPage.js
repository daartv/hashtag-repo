import React, { Component } from 'react';
import $ from 'jquery';

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
    console.log('_onSignUp');
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
        // this.setState({showUserPage: true});  
        console.log('_onSignUp success', data);
        this.props.onSignIn(true);
      },
      error: (error) => {
        console.log('_onSignUp error');
        this.setState({accountExistsMessage: 'Account already exists. Use different username or email.'});
      }
    });

  }

  render() {

    return (
      <div className="signup-div" style={style.signUpDiv} >
        <h2>Sign Up</h2>
        <form action="" method="" onSubmit={this._onSignUp}  > 
          <input placeholder="First name" type="text" 
            style={style.signUpFLName} ref={input => this.firstName = input} 
            required/>
          <input placeholder="Last name" type="text" 
            style={style.signUpFLName} ref={input => this.lastName = input}
            required/>
          <input placeholder="Email" type="text" 
            style={style.signUpInput} ref={input => this.email = input}
            required/>
          <input placeholder="Username" type="text" 
            style={style.signUpInput} ref={input => this.username = input}
            required/>
          <input placeholder="Password" type="text" 
            style={style.signUpInput} ref={input => this.password = input}
            required/>
          <input className="createAccountButton" type="submit" value="Create Account" 
            style={style.createAccountButton} />
          <span style={style.signUpMessage}>{this.state.accountExistsMessage}</span>
        </form>
      </div>
      );
  }
}

export default SignupPage;

const style = {
  appContainer: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  header: {
    height: '50px',
    backgroundColor: '#0f5959',
    paddingTop: '10px'
  },

  loginDiv: {
    width: '610px',
    float: 'right'
  },

  inputText: {
    marginLeft: '12px'
  },

  signInButton: {
    marginLeft: '12px',
    marginRight: '10px',
  },

  articlesDiv: {
    width: '60%',
    height: '600px',
    display: 'inline-block',
    verticalAlign: 'top',
    border: 'solid 1px'
  },

  signUpDiv: {
    width: '40%',
    height: '600px',
    display: 'inline-block',
    border: 'solid 1px',
    padding: '10px',

  },

  signUpFLName: {
    margin: '10px',
    width: '200px',
    height: '35px',
    borderRadius: '4px'
  },

  signUpInput: {
    margin: '10px',
    width: '420px',
    height: '35px',
    borderRadius: '4px'
  },

  createAccountButton: {
    margin: '10px',
    width: '420px',
    height: '35px',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5'
  },

  signUpMessage: {
    margin: '10px',
    color: 'red',
    display: 'block'
  }


};