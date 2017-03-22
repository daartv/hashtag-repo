import React, {Component} from 'react';
import { Col } from 'react-bootstrap'


class UserSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userpic: '../assets/images/default-user.png',
      totalOwed: '0.00',
      billsRemaining: 0
    }
  }

  render() {
    const { userpic, totalOwed, billsRemaining } = this.state;

    return (
      <Col md={12}>
      <div className="usersummary-div" >


        <div className="usersummary-details" >
          <table className="usersummary-table">
          <tbody>
            <tr>
            <th className="usersummary-th">Total Money Owed</th>
            <th className="usersummary-th">Bills Remaining</th>
            </tr>
            <tr>
              <td className="usersummary-td">{totalOwed}</td>
              <td className="usersummary-td">{billsRemaining}</td>
            </tr>
          </tbody>
          </table>
        </div>

        <div className="usersummary-options">
          <table>
          <tbody>

          </tbody>
          </table>
        </div>

      </div>
      </Col>
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


