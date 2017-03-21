import React, {Component} from 'react';

class UserBillsTableEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalBill: 9000,
      moneyOwed: 9000,
      description: 'Electricity',
      people: 'John Doe, Jane Doe',
      date: 'Test Date'
    };

  }


  render() {
    const { totalBill, moneyOwed, description, people, date } = this.props.entry;

    return (
      <div className="ubte-entry-div">
        <table className="ubte-table">
        <tbody>
        <tr>
          <td className="ubte-td">
            ${totalBill}
          </td>
          <td className="ubte-td">
            ${moneyOwed}
          </td>
          <td className="ubte-desc-td">
            <table>
            <tbody>
            <tr>
              <td className="ubte-desc-td">{description}</td>
            </tr>
            <tr>
              <td className="ubte-desc-td">{people}</td>
            </tr>
            <tr>
              <td className="ubte-desc-td">{date}</td>
            </tr>
            </tbody>
            </table>
          </td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default UserBillsTableEntry;