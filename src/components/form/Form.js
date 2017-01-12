import React from 'react';
import Login from './Login';

import Firebase from 'firebase';
import _ from 'lodash';

class Form extends React.Component {
  mixins: [ReactFireMixin]

  constructor( props ) {
    super( props );
    this.state = {
      users: [],
      isLoggedIn: false
    };

    this.handleLogin = this.handleLogin.bind( this );
  }

  componentWillMount() {
    /*eslint-disable*/
    this.firebaseRef = firebase.database().ref( 'Users' );
    this.firebaseRef.on( "value", (dataCallback) => {
      var users = dataCallback.val();
      this.setState( {
        users: users
      });
    } );
    /*eslint-enable*/
  }

  handleLogin( value ) {
    this.setState( {
      isLoggedIn: value
    } );

    //update props to force a re-render
    this.props = {
      loggedIn: true
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div>Display Form here</div>
        ) : (
          <Login handle={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default Form;
