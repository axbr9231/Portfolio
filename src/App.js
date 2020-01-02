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
    this.handleContactClick = this.handleContactClick.bind(this);
    this.projectsRef = React.createRef();
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();
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
          projectRef={this.projectsRef}
          contactClick={this.handleContactClick}
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

    if (this.aboutRef !== null) {

      this.aboutRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  handleProjectsClick() {
  
    if (this.projectsRef !== null) {

      this.projectsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  handleContactClick() {
    if (this.contactRef !== null) {

      this.contactRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  render() {
    const items = this.renderItems();
    
    return (
      <div id="App">
        <header>
          <nav class="navbar navbar-dark navbar-inverse justify-content-end fixed-top">
            <div class="nav-header justify-content-end">
            <button type="button" id="navButton" onClick={() => {this.handleAboutClick()}}>About</button>
            <button type="button" id="navButton" onClick={() => {
              this.handleProjectsClick()
            }}>Projects</button>
            <button type="button" id="navButton" onClick={() => {this.handleContactClick()}}>Contact</button>
            </div>
          </nav>
        </header>
        
          <div class="current_card">
          {items}
          </div>
          <div id="space_between"></div>
          <div id="main_page_about" ref={this.aboutRef}>
            <About class='About_Section'/>
          </div>
          <div id="space_between"></div>
          <div id="main_page_projects" ref={this.projectsRef}>
            <Projects />
          </div>
        
        <div id="space_between"></div>
        <div id="contact_section" ref={this.contactRef}>
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
