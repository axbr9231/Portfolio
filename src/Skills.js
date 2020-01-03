import React from 'react';
import './App.css';


class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container">
                <div id="skills_container" class="row">
                    <div id="skill_list" class="col-md-3">
                        <h3>Front End</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">JavaScript</li>
                            <li class="list-group-item">React</li>
                            <li class="list-group-item">jQuery</li>
                            <li class="list-group-item">CSS</li>
                            <li class="list-group-item">HTML</li>
                            <li class="list-group-item">BootStrap</li>
                        </ul>
                    </div>
                    <div id="skill_list" class="col-md-3">
                        <h3>Back End</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Node.js</li>
                            <li class="list-group-item">Express.js</li>
                            <li class="list-group-item">MySQL</li>
                            <li class="list-group-item">PostgreSQL</li>
                            <li class="list-group-item">MongoDB</li>
                            <li class="list-group-item">Mongoose</li>
                            <li class="list-group-item">Redux</li>
                            <li class="list-group-item">Redis</li>
                        </ul>
                    </div>
                    <div id="skill_list" class="col-md-3">
                        <h3>Testing</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Mocha</li>
                            <li class="list-group-item">Chai</li>
                            <li class="list-group-item">Artillery</li>
                            <li class="list-group-item">New Relic</li>
                        </ul>
                    </div>
                    <div id="skill_list" class="col-md-3">
                        <h3>Tools</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Git</li>
                            <li class="list-group-item">NPM</li>
                            <li class="list-group-item">Webpack</li>
                            <li class="list-group-item">Babel</li>
                            <li class="list-group-item">AWS</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;