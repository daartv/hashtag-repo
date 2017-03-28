import React, {Component} from 'react';
import UserBillsTableEntry from './UserBillsTableEntry';
import UserSummary from './UserSummary'
import Style from './userBillsTable-css';

const { table } = Style
class UserBillsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.exampleData = [
      {
        id: '1',
        totalBill: 9000,
        moneyOwed: 9000,
        description: 'Electricity Bill',
        people: 'John Doe, Jane Doe',
        date: 'Test Date'
      },
      {
        id: '2',
        totalBill: 8000,
        moneyOwed: 8000,
        description: 'Electricity Bill',
        people: 'John Doe, Jane Doe',
        date: 'Test Date'
      },
      {
        id: '3',
        totalBill: 7000,
        moneyOwed: 7000,
        description: 'Electricity Bill',
        people: 'John Doe, Jane Doe',
        date: 'Test Date'
      }
    ];
  }

  render() {
    const samples = this.exampleData;
    return (
      <div>
        <UserSummary />
        <div style={table}>
          { samples.map((entry) => <UserBillsTableEntry key={entry.id} entry={entry}/>) }
        </div>
      </div>
    );
  }
}

export default UserBillsTable;
