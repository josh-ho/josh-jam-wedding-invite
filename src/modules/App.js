import React, { Component } from 'react';
import Header from '../components/layout/Header';
import Form from '../components/form/Form';
import './App.css';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {tealA700} from 'material-ui/styles/colors';

//set the website colors
const muiTheme = getMuiTheme( {
  palette: {
    textColor: tealA700
  },
  appBar: {
    height: 50
  }
});


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Header />
            <Form />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
