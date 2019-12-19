import React from 'react';
import './App.css';


const Projects = () => {


    return (
        <div>
            <div class="container" id="projects_container">
                <div class="row">
                    <div class="col-md6">
                        <div class="card" style={cardStyle.card}>
                            <img src={require('./appPic.png')} alt="app_picture" style={imgStyle}></img>
                            <div class="card-body" style={cardStyle.body}>
                                <h5>Cocktail Maker</h5>
                                <p class="card-text">
                                    An application in which you can search for recipes for popular cocktails while listening to some smooth music. Built in React and Bootstrap.
                                </p>
                                <p class="card-text"><small>Link: <a href="http://axels-cocktail-maker.surge.sh/?fbclid=IwAR1uHTIeDGn7qy_RaUqKGeG5A-KxAJDK3FyTfC3PU9lWKiaQ3idvMiPH0pk">
                                    CocktailMaker</a> Code: <a href="https://github.com/axbr9231/cocktail-maker"><img src={require('./GitHub-Mark-32px.png')} alt="github_icon" className="githubLogo"></img></a></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;

const imgStyle = {
    width: '100%',
    height: '100%',
    border: 'solid black 1px'
};
const cardStyle = {
    card: {
        maxHeight: '350px',
        maxWidth: '250px',
        backgroundColor: 'DarkSlateGray',
        border: 'solid black 2px'
    },
    body: {
        color: 'white'
    }
};