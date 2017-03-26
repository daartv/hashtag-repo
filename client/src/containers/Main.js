import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MTP from 'material-ui/styles/MuiThemeProvider';

import Style from './mainPage-css.js';
import UserSummary from './UserSummary';
import MainNavBar from './MainNavBar'

import { Grid, Row, Col } from 'react-bootstrap'

const { container, heroStart, midSect, leftBox, rightBox, footer, heroInner,phonePhoto, topicLeft, topicRight, divider, footList } = Style


class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
   
  }

  render() {
    
    return (
      <Grid fluid style={container}>
        <Row>
          <Col md={12}>
            <MainNavBar />
          </Col>
        </Row>
        <Row>
          <div style={heroStart}>
            <div style={heroInner}>
              <div style={leftBox}>
                <h2 style={{"textAlign": "center"}}>Splitly</h2>
                <h3 style={{"textAlign": "center", "fontSize": "14px"}}>Split checks, without the awkwardness.</h3>
                <div style={{"display": "block"}}>
                <img style={phonePhoto} src="http://www.pngpix.com/wp-content/uploads/2016/04/Iphone-PNG-Image.png"/>
                </div>
                <p>Aenean sem hac, officia vel morbi mauris. Quam in a, congue nunc egestas faucibus lorem. Ante velit lobortis vestibulum elit tempus, integer mauris, id porttitor faucibus et, ipsum condimentum vulputate. Morbi rhoncus felis velit in ad mauris, a habitasse sit volutpat eu consequat, nam magna, amet velit maecenas a. Ut in feugiat morbi. </p>
              </div>
              <div style={rightBox}>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div style={midSect}>
            <div style={topicLeft}>
            <h2 style={{"textAlign": "center"}}>Splitly</h2>
            <h3 style={{"textAlign": "center", "fontSize": "14px"}}>Split checks, without the awkwardness.</h3>
            </div>

            <div style={topicRight}>
            <h2 style={{"textAlign": "center"}}>Splitly</h2>
                <h3 style={{"textAlign": "center", "fontSize": "14px"}}>Split checks, without the awkwardness.</h3>
            </div>
          </div>
        </Row>
        <Row>
          <div style={footer}>
                <div style={footList}>1</div>
                <div style={footList}>2</div>
                <div style={footList}>3</div>
                <div style={footList}>4</div>
                <div style={footList}>5</div>
                <div style={footList}>6</div>
          </div>
        </Row>
        <Row>
          <div style={footer}>
                {this.props.children}
          </div>
        </Row>
      </Grid>
    );
  }
}
export default Main;

