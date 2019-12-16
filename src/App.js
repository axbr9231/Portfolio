import React from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="App">
        <header>
          <nav class="navbar navbar-dark bg-dark navbar-inverse justify-content-end">
            <div class="nav-header justify-content-end">
            <button type="button" class="nav-item">About</button>
            <button type="button">Projects</button>
            <button type="button">Contact</button>
            </div>
          </nav>
        </header>
        
      </div>
    )
  }
}
