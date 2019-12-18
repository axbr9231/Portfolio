import React from 'react';
import './App.css';


const About = (props) => {
    return (
        <div>
            <div id="about_card">
                <div className="myInfo">
                <h4>Axel Brostedt</h4>
                <p>I am a software engineer who specializes in full stack web development. I am born and raised in Stockholm, Sweden but have for the past four and half years lived in Boulder Colorado getting my B.S. in International Affairs at the University of Colorado. With the exception of IT and software development, my interests are world politics and martial arts. One of my main hobbies for the past 5 years has been Muay Thai, in which I have competed both in the U.S. and Thailand as an amateur.</p>
                <br></br>
                <p>The technologies that I am the most familiar and comfortable with are Javascript, React.Js, jQuery, Node.Js, MongoDB, MySQL, Redux, HTML5, CSS and BootStrap. I am however not limited to these as I enjoy learning new frameworks and languages and see the benefit of challenging myself consistently.</p>
                <br></br>
                <p>I enjoy working with other people on a team and only feel content once I have brought something useful or meaningful to the table. Helping other people solve their problems is something I take great joy in. At the times when I find myself in a leadership position, I always strive to lead by example and place the needs of my team and its goals before my own.</p>
                </div>
                <div class="img_container">
                    <img class="profile_image animated rollIn slower" alt="picture_of_me" src={require('./profilbild.jpg')}></img>
                </div>
            </div>
        </div>
    )

}

export default About;

