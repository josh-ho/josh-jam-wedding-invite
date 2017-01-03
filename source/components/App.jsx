import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'test state',
        'test state 2'
      ]
    };
  }

  render() {
    var messageNodes = this.state.messages.map( (message) => {
      return (
        <div>{message}</div>
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}

export default App;
