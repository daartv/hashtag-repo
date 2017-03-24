import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import NewBillButton from '../components/NewBillButton'
import FriendsButton from '../components/FriendsButton'

import NavDropMenu from '../components/NavDropMenu'


class UserNavBar extends Component {
  render () {
    const { uploadBill } = this.props

    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Splitly</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
           {`We <3 our members!`}
          </Navbar.Text>
          <Nav pullRight>
            <NewBillButton
              uploadBill={uploadBill}/>
            <FriendsButton />
            <NavDropMenu />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default UserNavBar
