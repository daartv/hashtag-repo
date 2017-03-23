// TEMPLATE

import React from 'react'
import { Form, FormGroup, InputGroup, FormControl, Button, Col, DropdownButton, MenuItem } from 'react-bootstrap'

const AddBill = (props) => {
  return (
      <Form horizontal>
        <FormGroup controlId='addFriendName'>
          <Col md={4}>
            <FormControl type='text' placeholder="Friend's name" />
          </Col>
        </FormGroup>
        <FormGroup controlId='addFriendEmail'>
          <Col md={4}>
            <FormControl type='text' placeholder="Friend's email" />
          </Col>
        </FormGroup>
        <FormGroup controlId='addFriendAmount'>
          <Col md={4}>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type='text' placeholder='Amount owed' />
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col md={4}>
            <Button type='Add to bill'>
              Add to bill
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }

export default AddBill

