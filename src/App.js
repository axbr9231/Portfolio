import React from 'react';
import './App.css';
import About from './About.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }


  render() {

    return (
      <div id="App">
        <header>
          <nav class="navbar navbar-dark navbar-inverse justify-content-end">
            <div class="nav-header justify-content-end">
            <button type="button" class="nav-item" id="about">About</button>
            <button type="button">Projects</button>
            <button type="button">Contact</button>
            </div>
          </nav>
        </header>
        
          <div className="current_card">
            <About />
          </div>

        <footer>
          <div class="container">
            <p>Hello</p>
          </div>
        </footer>
        
      </div>
    )
  }
}
