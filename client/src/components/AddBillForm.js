
import React, {Component} from 'react'
import { Form, FormGroup, InputGroup, FormControl, Button, Col, DropdownButton, MenuItem } from 'react-bootstrap'

const style = {
  toggleButton: {
    backgroundColor: 'rgb(0, 150, 136)',
    color: 'white',
    marginLeft: '5px'
  }
}

class AddBillForm extends Component {
  constructor(props) {
      super(props);
    this.handleBillSubmit = this.handleBillSubmit.bind(this);
    this.handleAddBill = this.handleAddBill.bind(this);
  }


  handleAddBill (event) {
    event.preventDefault();
    const billInfo = {
      billDate: this.billDate.value,
      billName: this.billName.value,
      billTotal: this.billTotal.value
    }
    this.props.addBill(billInfo);
  }

  handleBillSubmit(event){
    console.log(event);
  }

  render() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const { billAction, toggleBill } = this.props;
    const { toggleButton } = style;

    const newdate = day + "/" + month + "/" + year;

    return (
      <div style={{'width':'90%', 'maxWidth': 700, 'margin': '0 auto'}}>
      <Form horizontal>
        <FormGroup controlId='billDate'>
          <Col>
            <FormControl type='text' inputRef={ref => {this.billDate = ref; }}  placeholder="Bill Date" value={newdate} />
          </Col>
        </FormGroup>
        <FormGroup controlId='billName'>
          <Col>
            <FormControl type='text' inputRef={ref => {this.billName = ref; }} placeholder="Bill Name" required />
          </Col>
        </FormGroup>
        <FormGroup controlId='billTotal'>
          <Col>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type='text' inputRef={ref => {this.billTotal = ref;}} placeholder='Bill Total' required />
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col>
          <div>
            <Button type='Add New Bill' onClick={this.handleAddBill}>
              Add New Bill
            </Button>
            <Button type='Toggle Bill' style={toggleButton} onClick={toggleBill}>{billAction}</Button>
            </div>
          </Col>
        </FormGroup>
      </Form>
      </div>
    )
  }
}

export default AddBillForm

