import React from 'react';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Reflux from 'reflux';
import UserStore from '../../stores/UserStore';
import _ from 'lodash';

var userStore = Reflux.connect( UserStore, 'userstore' );

const style = {
  flex: 1,
  justifyContent: 'flex-end'
}

class Login extends React.Component {
  mixins: [userStore]
  constructor( props ) {
    super( props );

    this.state = {
      email: '',
      firstName: '',
      lastName: ''
    }

    this.parentHandler = this.props.handle;
    this.userData = this.props.users;
    this.emailChangeHandler = this.emailChangeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
  }

  emailChangeHandler( evt ) {
    this.setState( {
      email: evt.target.value
    } );
  }

  nameHandler( evt, value ) {
    var elemId = evt.target.getAttribute( 'id' );
    if( elemId.indexOf( 'FirstName' ) !== -1 ){
      this.setState( {
        firstName: value
      } )
    } else if( elemId.indexOf( 'LastName' ) !== -1 ){
      this.setState( {
        lastName: value
      } );
    }
  }

  clickHandler( evt ) {
    if( this.parentHandler ) {
      this.userData = UserStore.getUserData();
      if( this.state.lastName ) {
        var userIndex = _.findIndex( this.userData, (obj) => {
          return obj.last_name.toLowerCase() === this.state.lastName.toLowerCase()
        } );

        if( typeof userIndex !== undefined ) {
          this.parentHandler( this.userData[userIndex] );
        }
      } else if( this.state.email ) {
        var i;
        var j;
        loop1:
        for( i = 0; i < this.userData.length; i++ ){
          if( _.isArray( this.userData[i].email ) ) {
            loop2:
            for( j = 0; j < this.userData[i].email.length; j++ ) {
              if( this.userData[i].email.toLowerCase() === this.state.email.toLowerCase() ){
                break loop1;
              }
            }
          } else {
            if( this.userData[i].email.toLowerCase() === this.state.email.toLowerCase() ){
              break;
            }
          }
        }

        if( typeof i !== 'undefined' && i != this.userData.length ) {
          this.parentHandler( this.userData[i] );
        }
      }

      //this.parentHandler( true );
    }
  }

  render() {
    return (
      <div>
        <div>
          <Subheader>Login with email</Subheader>
          <TextField
            hintText="example@example.com"
            floatingLabelText="E-mail"
            onChange={this.emailChangeHandler.bind(this)}
          />
          <Divider />
          <Subheader>Or Login with your name</Subheader>
          <TextField
            hintText="Given name"
            floatingLabelText="First Name"
            onChange={this.nameHandler.bind(this)}
          />
          <br/>
          <TextField
            hintText="Surname"
            floatingLabelText="Last Name"
            onChange={this.nameHandler.bind(this)}
          />
        </div>
        <RaisedButton label="Submit" primary={true} style={style} onClick={this.clickHandler} />
      </div>
    );
  }
}

export default Login;
