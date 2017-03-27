import React, {Component} from 'react'
import { Form, FormGroup, InputGroup, FormControl, Button, Col, DropdownButton, MenuItem } from 'react-bootstrap'
import AddFriends from './AddBill'
import AddBillForm from '../components/AddBillForm'
import BillProgress from '../components/BillProgress'
import BillStats from '../components/BillTable'
import FinalizeBill from '../components/FinalizeBill'

class AddNewBill extends Component {
  constructor(props) {
      super(props);
    console.log(props);
    this.state = {
      uploadedBill: '',
      currentBill: undefined,
      currentFriends: undefined,
      manualBill: true,
      finished: false,
      stepIndex: 0
    }
    console.log(this.state.currentBill);
    this.handleBillSubmit = this.handleBillSubmit.bind(this);
    this.addBill = this.addBill.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.submitFriends = this.submitFriends.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  addBill(billInfo){
    console.log('GOT HERE BRUH', billInfo);
    this.setState({currentBill: billInfo}, function(){
     this.handleNext();
     console.log('THIS IS THE CURRENT BILL', this.state.currentBill)
    });
  }

  addFriend(friendsInfo){
    if(this.state.currentFriends !== undefined){
      this.setState( (state) => {
        state.currentFriends = state.currentFriends.concat([friendsInfo]);
        return state;
     })
    } else {
      this.setState({currentFriends: [friendsInfo]}, function(){
        console.log('you added a friend', this.state.currentFriends);
      });
    }
  }

  submitFriends(){
    console.log('Got to the final step')
    this.handleNext();
  }

  handleNext(){
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev (){
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Choose a manual or ';
      case 1:
        return 'Add Friends';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  handleBillSubmit(event){

      $.ajax({
        type: 'POST',
        url: '/users/submitBill',
        data: JSON.stringify(userInfo),
        contentType: 'application/json',
        success: (data) => { 
          console.log('_onSignIn success', data);
          this.props.onSignIn(true, data);
        },
        error: (error) => {        
          // console.log('_onSignIn error');        
          this.signInUsername.value = '';
          this.signInPassword.value = '';
          this.setState({ target: event.target, show: !this.state.show }); //for popover
        }
      });
    }
  render() {
    const {currentBill, currentFriends} = this.state
    let formRender = this.state.stepIndex === 0 ? <AddBillForm addBill={this.addBill} currentBill={this.state.currentBill} /> : this.state.stepIndex === 1 ? <AddFriends addFriend={this.addFriend} currentFriends={this.state.currentFriends} handleAllFriends={this.submitFriends}/> : <FinalizeBill customSettings={this.customSettings} submitBill={this.submitBill}/>;

    const passedState = {
      stepIndex: this.state.stepIndex,
      finished: this.state.finished
    }
    const styleProps = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false
    }
  
    return (
      <div> 
      <div>
      <BillStats styleProps={styleProps} debtors={currentFriends} billStats={currentBill}/>
      </div>
      <div>
      <BillProgress handlePrev={this.handlePrev} getStepContent={this.getStepContent} currStep={formRender} handleNext={this.handleNext} passedState={passedState}/>
      <div>   
      </div>
      </div>
      </div>
    )
  }
}

export default AddNewBill
