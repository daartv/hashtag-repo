import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import axios from 'axios'

class NewBillButton extends Component {

  handleChange () {
    // const { uploadBill } = this.props
    // const uploadedBill = this.refs.uploadedBill.files[0]
    // const formData = new FormData()
    // formData.append('uploadedBill', uploadedBill)

    // axios.post('/uploadedBill', formData)
    // .then((res) => {
    //   // const fn = res.data.text
    //   uploadBill(uploadedBill)
    // })
    // .catch(err => console.log(err))
  }

  render () {
    // const { handleChange } = this;
    return (
        <Nav>
          <NavItem onClick={() => {this.refs.uploadedBill.click()}}>New Bill</NavItem>
          {/*THIS INPUT FORM BELOW IS 'INVISIBLE', AND TRIGGERED BY THE NAV ITEM ABOVE*/}
          <input
            type='file'
            ref='uploadedBill'
            style={{display: 'none'}}
            onChange={this.handleChange.bind(this)}
            />
        </Nav>
      )
  }
}

export default NewBillButton

