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

