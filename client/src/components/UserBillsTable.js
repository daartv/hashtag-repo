import React, {Component} from 'react';
import UserBillsTableEntry from './UserBillsTableEntry';

class UserBillsTable extends Component {
  constructor(props) {
    super(props);



    this.state = {

    };

  }


  render() {


    return (
      <div className="userbillstable-div">
        UserBillsTable
        <UserBillsTableEntry />
      </div>
    );
  }

}

export default UserBillsTable;