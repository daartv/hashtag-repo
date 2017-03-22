import React from 'react'
import { NavDropdown, MenuItem, Nav } from 'react-bootstrap'

const NavDropMenu = () => {
  return (
    <Nav>
    <NavDropdown title="Options">
       <MenuItem>Add Friend</MenuItem>
       <MenuItem>Bill History</MenuItem>
       <MenuItem divider />
       <MenuItem>Settings</MenuItem>
     </NavDropdown>
     </Nav>
  )
}
export default NavDropMenu