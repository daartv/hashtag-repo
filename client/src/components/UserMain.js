import React, {Component} from 'react';
import UserSummary from './UserSummary';
import UserBillsTable from './UserBillsTable';

class UserMain extends Component {
  constructor(props) {
    super(props);


    this.state = {

    };

  }


  render() {


    return (
      <div className="usermain-div">
        UserMain
        <UserSummary />
        <UserBillsTable />
      </div>
    );
  }

}

export default UserMain;