import React from 'react';
import './App.css';

const Tabs = (props) => {

    return (
        <div class="container justify-content-center">
            <div class="flex-row">
                <button id="tab" class="col-md-4" onClick={() => props.handleProjects()}>Projects</button>
                <button id="tab" class="col-md-4" onClick={() => props.handleAbout()}>About</button>
                <button id="tab" class="col-md-4" onClick={() => props.handleContact()}>Contact</button>
            </div>
        </div>
    )

}

export default Tabs;