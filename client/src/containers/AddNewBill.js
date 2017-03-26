import React, {Component} from 'react'
import { Form, FormGroup, InputGroup, FormControl, Button, Col, DropdownButton, MenuItem } from 'react-bootstrap'
import AddBill from './AddBill'

class AddNewBill extends Component {
  render() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    const newdate = day + "/" + month + "/" + year;
    return (
      <div style={{'width':'90%', 'margin': '0 auto'}}>
      <Form horizontal>
        <FormGroup controlId='billDate'>
          <Col md={4}>
            <FormControl type='text' placeholder="Bill Date" value={newdate} />
          </Col>
        </FormGroup>
        <FormGroup controlId='billName'>
          <Col md={4}>
            <FormControl type='text' placeholder="Bill Name" />
          </Col>
        </FormGroup>
        <FormGroup controlId='billTotal'>
          <Col md={4}>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type='text' placeholder='Bill Total' />
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col md={4}>
            <Button type='Add New Bill'>
              Add New Bill
            </Button>
          </Col>
        </FormGroup>
      </Form>
      </div>
    )
  }
}

export default AddNewBill

