import React, { Component, PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class NewBillButton extends Component {

  getImage(uploadedBill) {
    const { uploadBill } = this.props
    const fileReader = new FileReader();
    const self = this
    fileReader.onload = function(event) {
      const bill = new Image()
      bill.src = fileReader.result;
      uploadBill(bill, () => {
        self.context.router.history.push('/home/addnewbill/')
      })
    }
    fileReader.readAsDataURL(uploadedBill)
  }

  handleChange (event) {
    event.preventDefault();
    const uploadedBill = this.refs.uploadedBill.files[0];
    this.getImage(uploadedBill)
    /* * * SEND IMAGE TO SERVER HERE * * */
    // const formData = new FormData()
    // formData.append('uploadedBill', uploadedBill)
    // console.log(this.refs.uploadedBill.files)
    // axios.post('/uploadedBill', formData)
    // .then((res) => {
    //   // const fn = res.data.text
    //   uploadBill(uploadedBill)
    // })
    // .catch(err => console.log(err))
  }

    render () {
      return (
        <div>
          <FlatButton label='New Bill' onClick={() => {this.refs.uploadedBill.click()}} />
          <input
            type='file'
            ref='uploadedBill'
            style={{display: 'none'}}
            onChange={ event => this.handleChange(event) } />
        </div>
        )
    }
  }

  NewBillButton.contextTypes = {
    router: PropTypes.object
  }

  export default NewBillButton

