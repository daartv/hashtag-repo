import React, {Component} from 'react';

class UserSummary extends Component {
  constructor(props) {
    super(props);

    

    this.state = {
      userpic: '',
      totalOwed: null,
      billsRemaining: 0
    };

    this.defaults = {
      userpic: '../assets/images/default-user.png',
      totalOwed: '0.00',
      billsRemaining: 0
    }
  
  }


  render() {
    // const {userpic, totalOwed, billsRemaining} = this.state;
    const state = this.state;
    const defaults = this.defaults;


    return (
      <div className="usersummary-div" >
        <img 
          className="usersummary-userpic-img"
          src={state.userpic ? state.userpic : defaults.userpic} 
        />

        <div className="usersummary-details" >
          <table className="usersummary-table">
            <th className="usersummary-th">Total Money Owed</th>
            <th className="usersummary-th">Bills Remaining</th>
            <tr>
              <td className="usersummary-td">${state.totalOwed ? state.totalOwed : defaults.totalOwed}</td>
              <td className="usersummary-td">{state.billsRemaining ? state.billsRemaining : defaults.billsRemaining}</td>
            </tr>
          </table>
        </div>

        <div className="usersummary-options"> 
          <table>
            <tr><td>+ Add Bill</td></tr>
            <tr><td>+ Add Friend</td></tr>
            <tr><td>User Stats</td></tr>
          </table>
        </div>

      </div>
    );
  }

}

export default UserSummary;