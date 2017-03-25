const imgURL = 'http://www.summitskinandveincare.com/wp-content/uploads/2015/09/bigstock-Group-Of-Friends-Meeting-For-L-59135003.jpg'
const style = {

  container: {
    backgroundColor: '#263238',
    height: '100vh',
    width: '100%',
    minWidth: '600px',
    maxWidth: '100%',
    paddingTop: '4.5vh',
    // paddingLeft: '2.5vh',
    // paddingRight: '2.5vh',
    margin: '0 auto'
  },

  heroStart: {
    display: 'block',
    backgroundImage: 'url(' + imgURL + ')',
    backgroundSize: 'cover',
    width: '100%',
    paddingTop: '3vh',
    paddingBottom: '3vh',
    paddingLeft: '2.5vw',
    paddingRight: '2.5vw',
    margin: '0 auto',
    fontColor: '#3b464b',
    fontWeight: '400',
    fontSize: '18px'
  },

  heroInner: {
    display: 'table',
    minHeight: '70vh',
    width: '100%',
    paddingTop: '8vh',
    paddingBottom: '8vh',
    margin: '0 auto',
    fontColor: '#3b464b',
    fontWeight: '400',
    fontSize: '12px'
  },

  leftBox: {
    top: '50%',
    display: 'table-cell',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '50%',
    paddingTop: '1vh',
    paddingLeft: '2.5vw',
    paddingRight: '2.5vw',
    verticalAlign: 'middle'
  },
  rightBox: {
    top: '50%',
    display: 'table-cell',
    width: '50%',
    paddingTop: '1vh',
    paddingLeft: '2.5vw',
    paddingRight: '2.5vw',
    verticalAlign: 'middle'
  },

  phonePhoto: {
    maxWidth: '100%',
    maxHeight: '60%',
    padding: '5px'
  },
  midSect: {
    display: 'block',
    backgroundColor: '#0f5959',
    width: '100%',
    paddingTop: '2vh',
    paddingBottom: '2vh',
    margin: '0 auto',
    fontColor: '#3b464b',
    fontWeight: '400',
    fontSize: '12px'
  },
  topicLeft: {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    height: '30vh',
    width: '50%',
    paddingTop: '1vh',
    paddingLeft: '2.5vw',
    paddingRight: '1.5vw',
    textAlign: 'center'
  },
  topicRight: {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    height: '30vh',
    width: '50%',
    maxHeight: '30vh',
    paddingTop: '1vh',
    paddingLeft: '1.5vw',
    paddingRight: '2.5vw',
    textAlign: 'center'
  },
  divider: {
    position: 'absolute',
    width: '20%',
    display: 'inline-block',
    left: '50%',
    top: '10%',
    bottom: '10%',
    borderLeft: '1px solid white'
  },
    footer: {
    display: 'block',
    backgroundColor: '#263238',
    width: '100%',
    maxWidth: '100%',
    paddingTop: '1vh',
    margin: '0 auto',
    textAlign: 'center',
    fontColor: 'white'
  },
  footList: {
    width: 'calc(100% / 8)',  
    display: 'inline-block',
    verticalAlign: 'top',
    top: '10%',
    textAlign: 'center',
    margin: '2%',    
    padding: '2%',
    color: 'white',
    fontWeight: '300'
  }
}

export default style
