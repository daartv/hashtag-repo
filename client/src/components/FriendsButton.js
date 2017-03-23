import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';


const FriendsButton = (props) => {
  return (
    <Nav>
      <LinkContainer to={{ pathname: '/friendsList' }}>
      <NavItem>Friends</NavItem>
      </LinkContainer>
    </Nav>
    )
  }

export default FriendsButton