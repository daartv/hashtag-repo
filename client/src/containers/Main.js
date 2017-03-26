import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MTP from 'material-ui/styles/MuiThemeProvider';
import MainNavBar from './MainNavBar'
import Style from './mainPage-css';

const { container, heroStart, midSect, leftBox, navbar, rightBox, footer, heroInner, phonePhoto, topicLeft, topicRight, divider, footList } = Style

class Main extends Component {

/* * * * BELOW IS A LINK THAT SAYS USER PAGE ... THIS IS CURRENTLY SET TO NAVIGATE TO THE MAIN USERPAGE (WHICH SHOULD ONLY BE ACCESSIBLE IF THEY ARE LOGGED IN / VALID SESSION ... BECAUSE WE'RE NAVIGATING THROUGH A SINGLE PAGE APP, SIMPLY TYPING IN THE URL WON'T TAKE YOU TO THE DESIRED PAGE. THIS LINK CAN BE USED FOR TESTING PURPOSES, IN PARTICULAR, FOR TESTING OF ROUTE PROTECTION DUE TO SESSION VALIDITY ETC. YOU CAN ALSO CHANGE THE URL ROUTE (e.g., HOME/BILLHISTORY) TO ENSURE THAT THESE ROUTES ARE STILL PROTECTED. (hint: they are) * * * */
  render() {

    return (
      <div >
      <MainNavBar />
        <div style={heroStart}>
        <div style={heroInner}>
          <div style={leftBox}>
            <h2 style={{"textAlign": "center"}}>Splitly</h2>
            <h3 style={{"textAlign": "center", "fontSize": "14px"}}>Split checks, without the awkwardness.</h3>
            <div style={{"display": "block"}}>
            <img style={phonePhoto} src="http://www.pngpix.com/wp-content/uploads/2016/04/Iphone-PNG-Image.png"/>
            </div>
            <p> Write all the things </p>
          </div>
          <div style={rightBox}/>
        </div>
      </div>
      <div style={midSect}>

      {/* * * * THE LINK IN QUESTION * * * */}
      <Link to='/home'><h1>User Page</h1></Link>
      <h3 style={{"textAlign": "center", "fontSize": "14px"}}>Split checks, without the awkwardness.</h3>
      </div>
      </div>
    )
  }
}

export default Main;





/*
    return (
      <div>



        <Row>
          <div style={footer}>
                {this.props.children}
          </div>
        </Row>
      </div>
    );
  }
}
*/

