import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Main';
import AddNewBill from './AddNewBill';
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
      uploadedBill: '',
      currentBill: null,
      currentFriends: null
    }
  }

  uploadBill (uploadedBill) {
    console.log('upload bill')
    /* * * IS THIS WHERE WE SHOULD SAVE IT IN SOME TEMP FOLDER? * * * */
  }
  addBill(billInfo){
    console.log('GOT HERE BRUH', billInfo);
    this.setState({currentBill: billInfo })
  }

  addFriend(friendsInfo){
    if(this.state.currentFriends !== null){
      this.setState( (state) => {
        state.currentFriends = state.currentFriends.concat([friendsInfo]);
        return state;
     })
    } else{
      this.setState({currentFriends: [friendsInfo]});
    }
  }
  
  logOut(){
    $.ajax({
      type: 'GET',
      url: '/users/logout',
      contentType: 'application/json',
      success: (data) => {  
       
      },
      error: (error) => {
        console.log('checkUserLogged: user has no session');
      }
    });
  }

  render() {
    const { uploadBill, logOut } = this;

    return (
      <Router>
      <div>
        <UserNavBar logOut={logOut.bind(this)} uploadBill={uploadBill.bind(this)}/>
        {/* * * THIS COMPONENT BELOW THE NAV BAR WILL CONDITIONALLY RENDER * * * */}
        <Route exact path='/home' component={ UserBillsTable }/>
        <Route path='/home/friends' component={ FriendsList } />
        <Route path='/home/addnewbill' component={ AddNewBill } />
        <Route path='/home/addfriend' component={ AddFriend } />
        <Route path='/home/billhistory' component={ BillHistory } />
        <Route path='/home/settings' component={ Settings } />
        </div>
      </Router>
    );
  }
}
export default UserPage;

