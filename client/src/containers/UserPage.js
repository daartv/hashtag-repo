import React, {Component} from 'react';
import UserSummary from './UserSummary';
import UserBillsTable from './UserBillsTable';

class UserMain extends Component {
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

export default UserMain;