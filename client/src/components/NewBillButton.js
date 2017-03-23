import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';



const NewBillButton = () => {
  return (
    <Nav>
      <LinkContainer to={{ pathname: '/newBill' }}>
      <NavItem>New Bill</NavItem>
      </LinkContainer>
    </Nav>
    )
  }

export default NewBillButton

