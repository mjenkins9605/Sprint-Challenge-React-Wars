import React from "react";

import './StarWars.css';

function Character(props) {
    return (
        <div className="char-card">
            <h1 className="char-name">Name: {props.charData.name}</h1>
            <p className="char-info">Created: {props.charData.created}</p>
            <p className="char-info">Edited: {props.charData.editied}</p>
            <p className="char-info">Eye Color: {props.charData.eye_color}</p>
            <p className="char-info">Films: {props.charData.films}</p>
            <p className="char-info">Hair Color: {props.charData.hair_color}</p>
            <p className="char-info">Height: {props.charData.height}</p>
            <p className="char-info">Homeworld: {props.charData.homeworld}</p>
            <p className="char-info">Mass: {props.charData.mass}</p>
            <p className="char-info">Skin Color: {props.charData.skin_color}</p>
            <p className="char-info">Birth Year: {props.charData.birth_year}</p>
            <p className="char-info">Species: {props.charData.species}</p>
            <p className="char-info">Starships: {props.charData.starships}</p>
            <p className="char-info">URL: {props.charData.url}</p>
            <p className="char-info">Vehicles: {props.charData.vehicles}</p>
        </div>
    );
}

export default Character;