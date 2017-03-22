import React, {Component} from 'react';
import UserSummary from './UserSummary';
import Nav from './Nav'
import UserBillsTable from './UserBillsTable';

class UserPage extends Component {
  constructor(props) {
    super(props);


    this.state = {

    };

  }
  data() {

  }

  render() {


    return (
      <div className="usermain-div">
        UserPage
        <UserSummary />
        <UserBillsTable />
      </div>
    );
  }

}

export default UserPage;