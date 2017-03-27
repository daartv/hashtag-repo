import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';



class LogoutButton extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <FlatButton label="Logout" onTouchTap={this.props.logOut}/>
    )
  }
}
export default LogoutButton