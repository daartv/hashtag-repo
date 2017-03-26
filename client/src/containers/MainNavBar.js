import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

class MainNavBar extends Component {

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text='Splitly' />
        </ToolbarGroup>
        <ToolbarGroup>
          <Link to='/signup'>
          <FlatButton label='Join' />
          </Link>
          <Link to='/login'>
          <FlatButton label='Log In' secondary={true} />
          </Link>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default MainNavBar
