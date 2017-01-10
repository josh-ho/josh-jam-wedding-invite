import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

require( 'file-loader?name=index.html!./index.html' );
require( './assets/main.scss' );

ReactDOM.render(<App />, document.getElementById( 'container' ) );
