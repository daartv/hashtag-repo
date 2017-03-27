import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'wrap',
    margin: '5px auto 0',
  },
  propToggleHeader: {
    margin: '5px auto 5px',
  },
};



class BillStats extends Component {

  constructor(props) {
    super(props);
  }

  handleToggle(event, toggled){
    console.log(444)
  };

  handleChange(event){
    console.log('d');
  };

  render() {
    let { billData } = this.props
    let billStats = this.props.billStats !== undefined ? this.props.billStats : {billTotal: 0, billName: 'Bill Name', billDate: '27/3/2017'};
    let debtors = this.props.debtors !== undefined ? this.props.debtors : [{debtorfName: 'test', debtorlName: 'ing', debtorEmail: 'yahoo.com', debtAmount: 100}]
    return (
      <div style={{width: '100%', maxWidth: 700, margin: '0 auto'}}>
        <Table  
          height={this.props.styleProps.height}
          fixedHeader={this.props.styleProps.fixedHeader}
          fixedFooter={this.props.styleProps.fixedFooter}
          selectable={this.props.styleProps.selectable}
          multiSelectable={this.props.styleProps.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.props.styleProps.showCheckboxes}
            adjustForCheckbox={this.props.styleProps.showCheckboxes}
            enableSelectAll={this.props.styleProps.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" style={{fontSize: '2em', fontWeight: '600', color: '#000', textAlign: 'center'}}>
                {billStats.billName}
              </TableHeaderColumn>
            </TableRow>
            <TableRow style={{width: '100%', backgroundColor: '#009688'}}>
              <TableHeaderColumn style={{fontSize: '1.2em', fontWeight: '400', color: '#000', textAlign: 'center'}} tooltip="The ID">Bill Total: ${billStats.billTotal}</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: '1.2em', fontWeight: '400', color: '#000', textAlign: 'center'}} tooltip="The Name">Total Debtors: {debtors.length}</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: '1.2em', fontWeight: '400', color: '#000', textAlign: 'center'}} tooltip="The Status">Bill Date: {billStats.billDate}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.props.styleProps.showCheckboxes}
            deselectOnClickaway={this.props.styleProps.deselectOnClickaway}
            showRowHover={this.props.styleProps.showRowHover}
            stripedRows={this.props.styleProps.stripedRows}
          >
            {debtors.map( (debtor, index) => (
              <TableRow key={index} selected={debtor.selected}>
                <TableRowColumn>{debtor.debtorfName} {debtor.debtorlName}</TableRowColumn>
                <TableRowColumn>{debtor.debtorEmail}</TableRowColumn>
                <TableRowColumn>${debtor.debtAmount}</TableRowColumn>
                <TableRowColumn>${debtor.debtAmount}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.props.styleProps.showCheckboxes}
          >
          </TableFooter>
        </Table>
      </div>
    );
  }
}

export default BillStats