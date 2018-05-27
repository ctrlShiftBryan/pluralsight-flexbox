import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      border: 'solid 4px black',
    };

    const baseChildStyle = {
      padding: '1em',
      border: 'solid 1px yellow',
    };

    const childStyle1 = { ...baseChildStyle, backgroundColor: 'red' };
    const childStyle2 = { ...baseChildStyle, backgroundColor: 'green' };
    const childStyle3 = { ...baseChildStyle, backgroundColor: 'blue' };

    return (
      <div style={containerStyle}>
        <div style={childStyle1}>Child Item 1</div>
        <div style={childStyle2}>Child Item 2</div>
        <div style={childStyle3}>Child Item 3</div>
      </div>
    );
  }
}

export default App;
