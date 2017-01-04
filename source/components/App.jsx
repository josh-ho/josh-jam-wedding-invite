import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'test state - test live reloading 2 test eee 1 3 5',
        'eee - test state 2'
      ]
    };
  }

  render() {
    var messageNodes = this.state.messages.map( (message) => {
      return (
        <div style={{color:'red'}}>{message}</div>
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}

export default App;
