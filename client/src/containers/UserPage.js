import React, {Component} from 'react';

import Style from './userPage-css.js';
import UserSummary from './UserSummary';
import UserNavBar from './UserNavBar'

import { Grid, Row, Col } from 'react-bootstrap'

const { container } = Style


class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Grid fluid style={container}>
        <Row>
          <Col md={12}><UserNavBar/></Col>
        </Row>
        <Row>
          <UserSummary />
        </Row>
        <Row>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}
export default UserPage;

