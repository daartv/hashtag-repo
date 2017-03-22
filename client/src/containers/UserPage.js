import React, {Component} from 'react';
import UserSummary from './UserSummary';
import UserNavBar from './UserNavBar'
import UserBillsTable from './UserBillsTable';
import { Grid, Row, Col } from 'react-bootstrap'



class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      // userBillsTable for the moment - will use React Router
      <Grid fluid>
        <Row>
          <Col md={12}><UserNavBar /></Col>
        </Row>
        <Row>
          <UserSummary />
        </Row>
        <Row>
        <Col md={12}><UserBillsTable /></Col>
        </Row>
      </Grid>
    );
  }
}
export default UserPage;