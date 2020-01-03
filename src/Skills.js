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
                        <h4>Front End</h4>
                        <ul class="list-group list-group-flush">

                        </ul>
                    </div>
                    <div id="skill_list" class="col-md-3">
                        <h4>Back End</h4>
                        <ul class="list-group list-group-flush">

                        </ul>
                    </div>
                    <div id="skill_list" class="col-md-3">
                        <h4>Testing</h4>
                        <ul class="list-group list-group-flush">

                        </ul>
                    </div>
                    <div id="skill_list" class="col-md-3">
                        <h4>Tools</h4>
                        <ul class="list-group list-group-flush">

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;