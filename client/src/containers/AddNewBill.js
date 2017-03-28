import React, {Component, PropTypes} from 'react'
import { Form, FormGroup, InputGroup, FormControl, Button, Col, DropdownButton, MenuItem } from 'react-bootstrap'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import AddFriendsToBill from './AddFriendsToBill'
import AddBillForm from '../components/AddBillForm'
import BillProgress from '../components/BillProgress'
import BillStats from '../components/BillTable'
import FinalizeBill from '../components/FinalizeBill'

const style = {
  formCenter: {
    margin: 'auto',
    width: '50vw'
  },
  formSide: {
    width: '50vw'
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  }
}

class AddNewBill extends Component {
  constructor(props) {
      super(props);
    this.state = {
      uploadedBill: this.props.uploadedBill,
      currentBill: undefined,
      currentFriends: undefined,
      manualBill: true,
      finished: false,
      imagePath: '',
      stepIndex: 0,
      billAction: 'Show Bill',
      drawerOpen: false,
      billCode: 3
    }
    this.handleBillSubmit = this.handleBillSubmit.bind(this);
    this.addBill = this.addBill.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.submitFriends = this.submitFriends.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  addBill(billInfo){
    this.setState({currentBill: billInfo}, function(){
     this.handleNext();
    });
  }

  addFriend(debtorsInfo){
    if(this.state.currentFriends !== undefined){
      this.setState( (state) => {
        state.currentFriends = state.currentFriends.concat([debtorsInfo]);
        return state;
     })
    } else {
      this.setState({currentFriends: [debtorsInfo]}, function(){
      });
    }
  }

  submitFriends(){
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

  handleBillSubmit(){
    let self = this;
    let totalDebts = this.state.currentFriends.reduce(function(accum, friend){
      return accum += friend.debtAmount;
    }, 0);
    let imgData = this.state.uploadedBill.split('base64,')[1];

    const sendData = {
      bill : {
      billName: this.state.currentBill.billName,
      code: this.state.currentBill.billCode,
      totalAmount: this.state.currentBill.billTotal,
      totalDebt: totalDebts,
      image: imgData,
      debtors: this.state.currentFriends
    }
  };
      $.ajax({
        type: 'POST',
        url: '/users/submitbill',
        data: JSON.stringify(sendData),
        contentType: 'application/json',
        success: (data) => {
          self.context.router.history.push('/home')
        },
        error: (error) => {
          self.context.router.history.push('/home')
        }
      });
    }

  toggleBill() {

    this.setState({
      drawerOpen: !this.state.drawerOpen,
      billAction: this.state.drawerOpen ? 'Show Bill' : 'Hide Bill'
    })
  };


  render() {
    const {currentBill, currentFriends} = this.state
    const { uploadedBill } = this.props
    const { formCenter, formSide, img } = style

    let formRender = this.state.stepIndex === 0 ? <AddBillForm addBill={this.addBill} currentBill={this.state.currentBill} toggleBill={this.toggleBill.bind(this)} billAction={this.state.billAction} /> : this.state.stepIndex === 1 ? <AddFriendsToBill addFriend={this.addFriend} currentFriends={this.state.currentFriends} handleAllFriends={this.submitFriends} toggleBill={this.toggleBill.bind(this)} billAction={this.state.billAction} /> : <FinalizeBill customSettings={this.customSettings} submitBill={this.handleBillSubmit} toggleBill={this.toggleBill.bind(this)} billAction={this.state.billAction} />;
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
      <div style={this.state.drawerOpen ? formSide : formCenter }>
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
        <Drawer width={'700'} openSecondary={true} open={this.state.drawerOpen} >
        <img style={img} src={uploadedBill}/>
        </Drawer>
      </div>
    )
  }
}

AddNewBill.contextTypes = {
  router: PropTypes.object
}

export default AddNewBill

