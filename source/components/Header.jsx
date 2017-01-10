import React from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';

//to wrap and customize the app bar
class Header extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      messages: [
        'Josh and Jam wedding invite'
      ]
    };
  }

  render() {
    return (
      <AppBar title="Josh and Jam's Wedding" />
    )
  }
}

export default muiThemeable()(Header);
