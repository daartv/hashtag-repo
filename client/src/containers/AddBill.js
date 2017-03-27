import React, { Component } from 'react'
import { Form, FormGroup, InputGroup, FormControl, Button, Col, DropdownButton, MenuItem } from 'react-bootstrap'

class AddFriends extends Component {
  constructor(props){
    super(props);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleSubmitFriends = this.handleSubmitFriends.bind(this);
  }

  handleAddFriend(event){
    event.preventDefault();
    const debtorInfo = {
      debtorfName: this.debtorfName.value,
      debtorlName: this.debtorlName.value,
      debtorEmail: this.debtorEmail.value,
      debtAmount: this.debtAmount.value
    }
    this.debtorfName.value = '';
    this.debtorlName.value = '';
    this.debtorEmail.value = '';
    this.debtAmount.value = '';
    console.log(debtorInfo);
    this.props.addFriend(debtorInfo);
  }

  handleSubmitFriends(event){
    event.preventDefault();
    console.log('GOT HALFWAY');
    this.props.handleAllFriends();
  }

  render() {

  return (
  <div style={{'width':'90%', 'margin': '0 auto'}}>
      <Form horizontal>
        <FormGroup controlId='addDebtorFName'>
          <Col>
            <FormControl type='text' placeholder="Friend's name" inputRef={ref => {this.debtorfName = ref; }}/>
          </Col>
        </FormGroup>
        <FormGroup controlId='addDebtorLName'>
          <Col>
            <FormControl type='text' placeholder="Friend's last name" inputRef={ref => {this.debtorlName = ref; }}/>
          </Col>
        </FormGroup>
        <FormGroup controlId='addFriendEmail'>
          <Col>
            <FormControl type='text' placeholder="Friend's email" inputRef={ref => {this.debtorEmail = ref; }}/>
          </Col>
        </FormGroup>
        <FormGroup controlId='addFriendAmount'>
          <Col>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type='text' placeholder='Amount owed' inputRef={ref => {this.debtAmount = ref; }}/>
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col>
            <Button onClick={this.handleAddFriend} type='Add to bill'>
              Add Friend
            </Button> 
            <Button style={{'marginLeft': '5px'}} onClick={this.handleSubmitFriends} type='Add Friends'>
              Continue to Review Bill
            </Button>
          </Col>
        </FormGroup>
      </Form>
      </div>
    )
  }
}

export default AddFriends