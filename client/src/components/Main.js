import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MTP from 'material-ui/styles/MuiThemeProvider';
import MainNavBar from './MainNavBar'
import Style from './main-css';

const { container, heroStart, midSect, leftBox, navbar, rightBox, footer, heroInner, phonePhoto, topicLeft, topicRight, divider, footList } = Style

class Main extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>
      <MainNavBar signedIn={this.props.signedIn} onSignIn={this.props.onSignIn} />
        <div style={heroStart}>
        <div style={heroInner}>
          <div style={leftBox}>
            <h2 style={{"textAlign": "center"}}>Splitly</h2>
            <h3 style={{"textAlign": "center", "fontSize": "14px"}}>Split checks, without the awkwardness.</h3>
            <div style={{"display": "block"}}>
            <img style={phonePhoto} src="../assets/images/Iphone-PNG-Image.png"/>
            </div>
            <p style={{"textAlign": "center", "fontSize": "14px"}}> Introducing Splitly, an easier way to keep track of and settle bills among friends. </p>
          </div>
          <div style={rightBox}/>
        </div>
      </div>
      <div style={midSect}>
      <h2 style={{"textAlign": "center", "fontSize": "30px"}}>Splitly</h2>
      <h3 style={{"textAlign": "center", "fontSize": "18px"}}>Split checks, without the awkwardness.</h3>
      </div>
      </div>
    )
  }
}

export default Main;

