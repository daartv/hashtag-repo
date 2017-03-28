import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';





class LogoutButton extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout(event) {
    event.preventDefault();
    this.context.router.history.push('/goodbye')
  }


  render() {
    return (
        <FlatButton label="Logout" onClick={event => this.handleLogout(event)}/>

        // <FlatButton label="Logout" onTouchTap={this.props.logOut}/>
    )
  }
}

LogoutButton.contextTypes = {
  router: PropTypes.object
}
export default LogoutButton