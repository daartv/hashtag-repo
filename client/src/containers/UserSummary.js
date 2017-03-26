import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const style = {
  width: '50vw',
  textAlign: 'center',
  display: 'inline-block'
};


class UserSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalOwed: '0.00',
      billsRemaining: 0
    }
  }

  render() {
    const { totalOwed, billsRemaining } = this.state;

    return (
      <div>
        <div style={style}>
          <h5>Total Owed</h5>
          {totalOwed}
        </div>
        <div style={style}>
          <h5>Bills Remaining</h5>
          {billsRemaining}
        </div>
        </div>
    );
  }

}

export default UserSummary;

/* Backup

<div className="usersummary-div" >
        <img
          className="usersummary-userpic-img"
          src={state.userpic ? state.userpic : defaults.userpic}
        />

        <div className="usersummary-details" >
          <table className="usersummary-table">
          <tbody>
            <th className="usersummary-th">Total Money Owed</th>
            <th className="usersummary-th">Bills Remaining</th>
            <tr>
              <td className="usersummary-td">${state.totalOwed ? state.totalOwed : defaults.totalOwed}</td>
              <td className="usersummary-td">{state.billsRemaining ? state.billsRemaining : defaults.billsRemaining}</td>
            </tr>
          </tbody>
          </table>
        </div>

        <div className="usersummary-options">
          <table>
            <tr><td className="usersummary-options-td">+ Add Bill</td></tr>
            <tr><td className="usersummary-options-td">+ Add Friend</td></tr>
            <tr><td className="usersummary-options-td">User Stats</td></tr>
          </table>
        </div>

      </div>

*/


