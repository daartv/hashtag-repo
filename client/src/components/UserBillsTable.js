import React, {Component} from 'react';
import UserBillsTableEntry from './UserBillsTableEntry';

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
      <div className="userbillstable-div">
        UserBillsTable
        <div className="userbillstable-tabs">

        </div>

        <div className="ubt-table">
          {
            // <UserBillsTableEntry />
            samples.map((entry) => <UserBillsTableEntry key={entry.id} entry={entry} />)
          }
        </div>
      </div>
    );
  }

}

export default UserBillsTable;

/*

<table className="ubt-table">
  <tbody>
    {
      // <UserBillsTableEntry />
      samples.map((entry) => <UserBillsTableEntry key={entry.id} entry={entry} />)
    }
  </tbody>
</table>

*/