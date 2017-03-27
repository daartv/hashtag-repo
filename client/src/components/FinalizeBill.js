import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

import { Grid, Row, Col, Form, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'

const styles = {
        block: {
          maxWidth: 250,
        },
        checkbox: {
          marginBottom: 16,
        },
      };

class FinalizeBill extends Component {
  constructor(props) {
      super(props);
    console.log(props);
    this.submitFinalBill = this.submitFinalBill.bind(this);
  }

  submitFinalBill(event){
    event.preventDefault();
    console.log('got HERE YOU DUMMY');
    this.props.submitBill();
  }

  render() {
   return (
  <div style={{'width':'90%', 'margin': '0 auto'}}>
    <div style={styles.block}>
   
    <Grid>
     <Form horizontal>
     <Row className="show-grid">
      <Col xs={6} md={3}>

    <Checkbox
      label="Simple"
      style={styles.checkbox}
    />

    
   </Col>
   <Col xs={6} md={3}>

    <Checkbox
      label="Simple"
      style={styles.checkbox}
    />

    
   </Col>
    </Row>
    <Row>
    <FormGroup>
          <Col>
            <Button onClick={this.submitFinalBill} type='Finalize Bill'>
              Submit Bill
            </Button> 
          </Col>
        </FormGroup>
            </Row>
            </Form>
    </Grid>
    </div>
  </div>
  );
}
}
export default FinalizeBill
