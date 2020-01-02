import React from 'react';
import './App.css';


class Projects extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div class="outer_projects_container">
                <div class="container" id="projects_container">
                    <div class="row mt-4 justify-content-between">
                        <div>
                            <div class="card" style={cardStyle.card}>
                                <div class="card_inner">
                                    <div class="card_front">
                                        <img src={require('./appPic.png')} alt="app_picture" style={imgStyle}></img>
                                        <div class="card-body" style={cardStyle.body}>
                                            <h5>Cocktail Maker</h5>
                                            <p class="card-text">
                                                An application in which you can search for recipes for popular cocktails while listening to some smooth music. Built in React and Bootstrap.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="card_back">
                                        <div class="card-body mt-5 mb-5">
                                            <p>React</p>
                                            <p>Bootstrap</p>
                                        </div>
                                        <p id="cocktail-text" class="card-text">Demo: <a href="http://axels-cocktail-maker.surge.sh/?fbclid=IwAR1uHTIeDGn7qy_RaUqKGeG5A-KxAJDK3FyTfC3PU9lWKiaQ3idvMiPH0pk">
                                            CocktailMaker</a>
                                        </p>
                                        <p>
                                        <img src={require('./GitHub-Mark-32px.png')} alt="github_icon" className="githubLogo"></img> <a href="https://github.com/axbr9231/cocktail-maker"> Code</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            <p class="card" style={cardStyle.card}>
                                <div class="card_inner">
                                    <div class="card_front">
                                        <img src={require('./Minesweeper.png')} alt="app_picture" style={imgStyle}></img>
                                        <div class="card-body" style={cardStyle.body}>
                                            <h5>Mine Sweeper</h5>
                                            <p class="card-text">
                                                A reacreation of Mine Sweeper built in React and Bootstrap.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="card_back">
                                        <div class="card_body mt-5 mb-5">
                                            <p>React</p>
                                            <p>Bootstrap</p>
                                        </div>
                                        <p id="mineSweeper-text" class="card-text">Demo: <a href="http://axels-cocktail-maker.surge.sh/?fbclid=IwAR1uHTIeDGn7qy_RaUqKGeG5A-KxAJDK3FyTfC3PU9lWKiaQ3idvMiPH0pk">
                                            MineSweeper</a>
                                        </p>
                                        <p><img src={require('./GitHub-Mark-32px.png')} alt="github_icon" className="githubLogo"></img> <a href="https://github.com/axbr9231/Axels-MineSweeper"> Code</a></p>
                                    </div>
                                </div>
                            </p>
                        </p>
                        <div>
                            <div class="card" style={cardStyle.card}>
                                <div class="card_inner">
                                    <div class="card_front">
                                        <img src={require('./SwaggyThreadz.png')} alt="app_picture" style={imgStyle}></img>
                                        <div class="card-body" style={cardStyle.body}>
                                            <h5>Swaggy Threadz</h5>
                                            <p class="card-text">
                                                A full stack project built for a clothing online store. Front end hosted through Express and back end through AWS.
                                            </p>
                                        </div> 
                                    </div>
                                    <div class="card_back">
                                        <div class="card-body">
                                            <p>React</p>
                                            <p>Redux</p>
                                            <p>Express</p>
                                            <p>Node</p>
                                            <p>PostgreSQL</p>
                                            <p>BootStrap</p>
                                        </div>
                                        <p class="card-text">Demo: <a href="http://axels-cocktail-maker.surge.sh/?fbclid=IwAR1uHTIeDGn7qy_RaUqKGeG5A-KxAJDK3FyTfC3PU9lWKiaQ3idvMiPH0pk">
                                            SwaggyThreadz</a>
                                        </p>
                                        <p>
                                        <img src={require('./GitHub-Mark-32px.png')} alt="github_icon" className="githubLogo"></img> <a href="https://github.com/GHRBLD05/SwaggyThreadz"> Code</a>
                                        </p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects;

const imgStyle = {
    width: '100%',
    height: '100%',
    maxHeight: '125px',
    border: 'solid black 1px'
};
const cardStyle = {
    card: {
        maxHeight: '350px',
        maxWidth: '250px',
        backgroundColor: 'transparent',
        border: 'solid black 2px',
        minHeight: '344.84px',
        minWidth: '250px'
    },
    body: {
        color: 'white',
        
    }
};