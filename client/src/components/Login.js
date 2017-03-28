import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, FormGroup, FormControl, Button, Overlay, Popover } from 'react-bootstrap'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      show: false
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(event) {
    const self = this;
    event.preventDefault();
    if (this.signInUsername.value === '' || this.signInPassword.value === '') {
      this.setState({ target: event.target, show: !this.state.show }); //for popover
    } else {
      const userInfo = {
        username: this.signInUsername.value,
        password: this.signInPassword.value
      };
      $.ajax({
        type: 'POST',
        url: '/users/signin',
        data: JSON.stringify(userInfo),
        contentType: 'application/json',
        success: (data) => {
          this.props.onSignIn(true, data);
          self.context.router.history.push('/home')
        },
        error: (error) => {
          this.signInUsername.value = '';
          this.signInPassword.value = '';
          this.setState({ target: event.target, show: !this.state.show }); //for popover
        }
      });
    }
  }

  render() {
    return (
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl
            type='text'
            placeholder='Username'
            inputRef={ref => { this.signInUsername = ref; }}
            required />
          {' '}
          <FormControl
            type='text'
            placeholder='Password'
            inputRef={ref => { this.signInPassword = ref; }}
            required />
          {' '}
        <Button
          type='submit'
          bsStyle='success'
          onClick={this.handleSignIn}>Login</Button>
        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this}
          containerPadding={20}>
        <Popover id="popover-contained" title="">
          <strong>Invalid username or password.</strong>
        </Popover>
        </Overlay>
        </FormGroup>
      </Navbar.Form>
    )
  }
}

Login.contextTypes = {
  router: PropTypes.object
}

export default Login
