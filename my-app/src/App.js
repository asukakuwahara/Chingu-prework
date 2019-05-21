import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchField from "react-search-field";



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="panel">
          <h1>panelll</h1>
        </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
