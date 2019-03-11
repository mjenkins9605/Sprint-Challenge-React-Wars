import React from "react";

import './StarWars.css';

function Character(props) {
    return (
        <div className="char-card">
            <h1 className="char-name"><strong>Name:</strong> {props.charData.name}</h1>
            <p className="char-info"><strong>Created:</strong> {props.charData.created}</p>
            <p className="char-info"><strong>Edited:</strong> {props.charData.editied}</p>
            <p className="char-info"><strong>Eye Color:</strong> {props.charData.eye_color}</p>
            <p className="char-info"><strong>Films:</strong> <a href={props.charData.films} target="_blank">Click Here</a></p>
            <p className="char-info"><strong>Hair Color:</strong> {props.charData.hair_color}</p>
            <p className="char-info"><strong>Height:</strong> {props.charData.height}</p>
            <p className="char-info"><strong>Homeworld:</strong> <a href={props.charData.homeworld} target="_blank">Click Here</a></p>
            <p className="char-info"><strong>Mass:</strong> {props.charData.mass}</p>
            <p className="char-info"><strong>Skin Color:</strong> {props.charData.skin_color}</p>
            <p className="char-info"><strong>Birth Year:</strong> {props.charData.birth_year}</p>
            <p className="char-info"><strong>Species:</strong> <a href={props.charData.species} target="_blank">Click Here</a></p>
            <p className="char-info"><strong>Starships:</strong> <a href={props.charData.starships} target="_blank">Click Here</a></p>
            <p className="char-info"><strong>URL:</strong> <a href={props.charData.url} target="_blank">Click Here</a></p>
            <p className="char-info"><strong>Vehicles:</strong> <a href={props.charData.vehicles} target="_blank">Click Here</a></p>
        </div>
    );
}

export default Character;