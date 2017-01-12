import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  flex: 1,
  justifyContent: 'flex-end'
}

class Login extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      email: ''
    }

    this.parentHandler = props.handle;
    this.emailChangeHandler = this.emailChangeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
  }

  emailChangeHandler( evt ) {
    this.setState( {
      email: evt.target.value
    } );
  }

  clickHandler( evt ) {
    if( this.parentHandler ) {
      this.parentHandler( true );
    }
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            hintText="email"
            floatingLabelText="E-mail"
            onChange={this.emailChangeHandler}
          />
        </div>
        <RaisedButton label="Submit" primary={true} style={style} onClick={this.clickHandler} />
      </div>
    );
  }
}

export default Login;
