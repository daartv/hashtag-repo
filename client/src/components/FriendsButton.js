import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';



const FriendsButton = (props) => {
  return (
    <Link to='/home/friends'>
      <FlatButton label='Friends'/>
    </Link>
    )
  }

export default FriendsButton