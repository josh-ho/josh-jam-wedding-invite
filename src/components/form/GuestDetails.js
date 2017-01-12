import React from 'react';
import Reflux from 'reflux';
import UserStore from '../../stores/UserStore';

var userStore = Reflux.connect( UserStore, 'userstore' );

class GuestDetails extends React.Component {
  mixins: [userStore]
  constructor( props ) {
    super( props );
    this.user = UserStore.getLoggedInUserData();
    console.log( "this user", this.user );
  }
  render() {
    return (
      <div>{this.props.user}</div>
    )
  }
}

export default GuestDetails;
