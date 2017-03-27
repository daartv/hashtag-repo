import React, { Component } from 'react'


const LoginModal = (props) => {
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  componentDidMount: function () {
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function() {
    let {title, message} = this.props;
    return (
  <div className="reveal tiny text-center" id="error-modal" data-reveal="">
    <h4>{title}</h4>
    <p>{message}</p>
    <button className="button hollow" data-close="" type="button">
      Close
    </button>
  </div>
  );
  }
}

module.exports = LoginModal;