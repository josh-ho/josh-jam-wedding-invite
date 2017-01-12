import React from 'react';
import Login from './Login';
import GuestDetails from './GuestDetails';
import Reflux from 'reflux';
import UserStore from '../../stores/UserStore'

import _ from 'lodash';

var userStore = Reflux.connect( UserStore, 'userstore' );

class Form extends React.Component {
  mixins: [ReactFireMixin, userStore]

  constructor( props ) {
    super( props );
    this.users = [];
    this.state = {
      users: [],
      isLoggedIn: false
    };

    /*eslint-disable*/
    this.firebaseRef = firebase.database().ref( 'Users' );
    this.firebaseRef.on( "value", (dataCallback) => {
      var users = dataCallback.val();
      this.users = users;
      this.setState({
        users: users
      });
      console.log( users, this.users );
      UserStore.setUserData( users );
    } );
    /*eslint-enable*/
    this.handleLogin = this.handleLogin.bind( this );
  }

  handleLogin( loggedInUser ) {
    var value = true;
    console.log( loggedInUser );
    this.setState( {
      isLoggedIn: value,
      loggedInUser: loggedInUser
    } );

    UserStore.setLoggedInUserData( loggedInUser );

    //update props to force a re-render
    this.props = {
      loggedIn: value
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div>
            <div>Display Form here</div>
            <GuestDetails  />
          </div>
        ) : (
          <Login handle={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default Form;
