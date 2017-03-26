import React, { Component } from 'react'
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
    event.preventDefault();
    console.log('_onSignIn', event.target);
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
          console.log('_onSignIn success', data);
          this.props.onSignIn(true, data);
        },
        error: (error) => {        
          // console.log('_onSignIn error');        
          this.signInUsername.value = '';
          this.signInPassword.value = '';
          this.setState({ target: event.target, show: !this.state.show }); //for popover
        }
      });
    }
  }

  // need to find a way to call the event handler if the user tab on the button and press enter react-bootstrap button doesnt trigger the function
  render() {
    return (  
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl type='text' placeholder='Username'  
            inputRef={ref => { this.signInUsername = ref; }} required            
          /> 
          {' '}    
          <FormControl type='text' placeholder='Password' 
            inputRef={ref => { this.signInPassword = ref; }} required
          /> 
          {' '}
        <Link to="/home"><Button type='submit' bsStyle='success' onClick={this.handleSignIn} >Login</Button></Link>        
        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this}
          containerPadding={20}
        >
        <Popover id="popover-contained" title="" 
          
        >
          <strong>Invalid username or password.</strong> 
        </Popover>
        </Overlay>
        </FormGroup>
        
      </Navbar.Form>        
    )
  }
}
export default Login

/*
//for popover
<Overlay
  show={this.state.show}
  target={this.state.target}
  placement="bottom"
  container={this}
  containerPadding={20}
  positionLeft={200} positionTop={200}
>
<Popover id="popover-contained" title="" 
  positionLeft={200} positionTop={200}>
  <strong>Invalid username or password.</strong> 
</Popover>
</Overlay>

*/