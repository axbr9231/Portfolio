import React from 'react';
import './App.css';
import About from './About.js';
import Projects from './Projects.js'
import Tabs from './Tabs.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_card: 'home'
    }
    this.renderItems = this.renderItems.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleProjectsClick = this.handleProjectsClick.bind(this);
  }
  renderItems() {
    if (this.state.current_card === 'about') {
      return (
        <div class="animated fadeIn slow">
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
          <Tabs 
          handleProjects={this.handleProjectsClick}
          handleAbout={this.handleAboutClick}
          />
        </div>
      )
    } else if (this.state.current_card === 'projects') {
      return (
        <div id="projects_tray">
          <Projects />
        </div>
      )
    }
  }

  handleAboutClick() {
    this.setState({
      current_card: 'about'
    })
  }

  handleProjectsClick() {
    this.setState({
      current_card: 'projects'
    });
  }

  render() {
    const items = this.renderItems();
    return (
      <div id="App">
        <header>
          <nav class="navbar navbar-dark navbar-inverse justify-content-end">
            <div class="nav-header justify-content-end">
            <button type="button" id="navButton" onClick={() => {this.handleAboutClick()}}>About</button>
            <button type="button" id="navButton" onClick={() => {
              this.handleProjectsClick()
            }}>Projects</button>
            <button type="button" id="navButton">Contact</button>
            </div>
          </nav>
        </header>
        
          <div class="current_card">
          {items}
          </div>
          <div id="space_between"></div>
          <div id="main_page_about">
            <About class='About_Section'/>
          </div>
          <div id="space_between"></div>
          <div id="main_page_about">
            <Projects />
          </div>
        {/* <footer>
          <div class="container">
            <p>Hello</p>
          </div>
        </footer> */}
        <div id="space_between"></div>
        <div id="contact_section">
          <div class="contact_container pt-5">
            <div class="mb-4"><img src={require('./icons8-location-64.png')} alt="Icon by Icons8"></img> Boulder, CO, US</div>
            <div class="mb-4"><img src={require('./icons8-email-64.png')} alt="Icon by Icons8"></img> Email: axelbrostedt@gmail.com</div>
            <div class="mb-4"><img src={require('./icons8-github-64.png')} alt="Icon by Icons8"></img> Github: <a href="https://github.com/axbr9231">axbr9231</a></div>
            <div><img src={require('./icons8-linkedin-64.png')} alt="Icon by Icons8"></img> LinkedIn: <a href="https://www.linkedin.com/in/axel-brostedt/">axel-brostedt</a></div>
          </div>
        </div>
        
      </div>
    )
  }
}
