import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AddBillForm from '../components/AddBillForm'
/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class BillProgress extends Component {
  constructor(props) {
      super(props);
    
  }



  render() {
    const {finished, stepIndex} = this.props.passedState;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Add Bill Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Select Friends to Bill</StepLabel>
          </Step>
          <Step>
            <StepLabel>Submit Bill Total</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.props.getStepContent(stepIndex)}</p>
              
            </div>
          )}
        </div>
        <div>
        <div style={{width: '100%', margin: 'auto'}}>
            {this.props.currStep}
            </div>
            </div>
      </div>
    );
  }
}

export default BillProgress;