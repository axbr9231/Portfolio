import React from 'react';
import './App.css';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div class="container justify-content-center">
                <div class="flex-row">
                    <button ref={this.props.projectsRef} id="tab" class="col-md-4" onClick={() => this.props.handleProjects()}>Projects</button>
                    <button id="tab" class="col-md-4" onClick={() => this.props.handleAbout()}>About</button>
                    <button id="tab" class="col-md-4" onClick={() => this.props.contactClick()}>Contact</button>
                </div>
            </div>
        )
    }

}

export default Tabs;