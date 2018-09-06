import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ciao from './Ciao';
import Foo from './Foo';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Ciao />
       <Foo />
      </div>
    );
  }
}

export default App;
