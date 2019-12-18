import React from 'react';
import './App.css';
import About from './About.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_card: 'home'
    }
    this.renderItems = this.renderItems.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
  }
  renderItems() {
    if (this.state.current_card === 'about') {
      return (
        <div class="animated zoomInRight slow">
          <About />
        </div>
      )
    } else if (this.state.current_card === 'home') {
      return (
        <div>
          <h1 id="myName" class="animated fadeInDownBig slower">
          Axel Brostedt | Software Engineer
          </h1>
          <img src={require('./moose.png')} alt="Icon made by Freepik" class="moosePic animated fadeInUp slower"></img>
        </div>
      )
    }
  }

  handleAboutClick() {
    this.setState({
      current_card: 'about'
    })
  }

  render() {
    const items = this.renderItems();
    return (
      <div id="App">
        <header>
          <nav class="navbar navbar-dark navbar-inverse justify-content-end">
            <div class="nav-header justify-content-end">
            <button type="button" id="about" onClick={() => {this.handleAboutClick()}}>About</button>
            <button type="button">Projects</button>
            <button type="button">Contact</button>
            </div>
          </nav>
        </header>
        
          <div class="current_card">
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
