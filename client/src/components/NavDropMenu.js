import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';


class NavDropMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
  }

  handleTouchTap (event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose () {
    this.setState({
      open: false,
    });
  };



  render() {
    return (
      <div>
        <FlatButton
          label='Options'
          onTouchTap={this.handleTouchTap.bind(this)}
          secondary={true}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
          <Menu>
            <MenuItem containerElement={<Link to='/home/addfriend'/>} primaryText='Add Friend' />
            <MenuItem containerElement={<Link to='/home/billhistory'/>} primaryText='Past Bills' />
            <MenuItem containerElement={<Link to='/home/settings'/>} primaryText='Settings' />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default NavDropMenu

