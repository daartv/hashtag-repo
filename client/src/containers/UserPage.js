import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import UserSummary from './UserSummary';
import UserNavBar from './UserNavBar';
import UserBillsTable from './UserBillsTable'
import FriendsList from './FriendsList';
import AddFriend from './AddFriend';
import BillHistory from './BillHistory';
import Settings from './Settings';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedBill: ''
    }
  }

  uploadBill (uploadedBill) {
    console.log('upload bill')
    /* * * IS THIS WHERE WE SHOULD SAVE IT IN SOME TEMP FOLDER? * * * */
  }


  render() {
    const { uploadBill } = this;
    return (
      <div>
        <UserNavBar uploadBill={uploadBill.bind(this)}/>
        {/* * * THIS COMPONENT BELOW THE NAV BAR WILL CONDITIONALLY RENDER * * * */}
        <Route exact path='/home' component={ UserBillsTable }/>
        <Route path='/home/friends' component={ FriendsList } />
        <Route path='/home/addfriend' component={ AddFriend } />
        <Route path='/home/billhistory' component={ BillHistory } />
        <Route path='/home/settings' component={ Settings } />
      </div>
    );
  }
}
export default UserPage;

