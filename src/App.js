import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
        <li><Link to="/first-page">First Page</Link></li>
        <li><Link to="/second-page">Second Page</Link></li>
        <li><Link to="/third-page">Third Page</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
