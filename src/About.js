import React from 'react';
import './App.css';


const About = (props) => {
    return (
        <div>
            <div id="about_card" class="row">
                <div className="img_container">
                    <img className="profile_image" alt="picture_of_me" src={require('./profilbild.jpg')}></img>
                </div>
                <h4>Axel Brostedt</h4>
                <p>This will be info about me</p>
                </div>
        </div>
    )

}

export default About;