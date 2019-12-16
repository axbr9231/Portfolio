import React from 'react';
import './App.css';
import About from './About.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_card: 'about'
    }
    this.renderItems = this.renderItems.bind(this);

  }
  renderItems() {
    if (this.state.current_card === 'about') {
      return (
        <div id="about_container">
          <div className="img_container">
            <img className="profile_image" alt="picture_of_me" src={require('./profilbild.jpg')}></img>
          </div>
          <About />
        </div>
      )
    }
  }

  render() {
    const items = this.renderItems();
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
          {items}
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
