import React, { Component } from 'react'
import { NavDropdown, MenuItem, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';



class NavDropMenu extends Component {

  AddFriend () {
    return (
      <LinkContainer to={{ pathname: '/addFriend' }}>
      <MenuItem>Add Friend</MenuItem>
      </LinkContainer>
    )
  }

  BillHistory () {
    return (
      <LinkContainer to={{ pathname: '/billHistory' }}>
      <MenuItem>Bill History</MenuItem>
      </LinkContainer>
    )
  }

  Settings () {
    return (
      <LinkContainer to={{ pathname: '/settings' }}>
      <MenuItem>Settings</MenuItem>
      </LinkContainer>
    )
  }

  render () {
    const { AddFriend, BillHistory, Settings } = this
    return (
      <Nav>
      <NavDropdown title="Options">
         <AddFriend />
         <BillHistory />
         <MenuItem divider />
         <Settings />
       </NavDropdown>
       </Nav>
    )
  }
}
export default NavDropMenu