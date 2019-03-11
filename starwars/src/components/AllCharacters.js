import React from "react";

import Character from "./Character";
import './StarWars.css';

function AllCharacters(props) {
    return (
        <div className="char-list">
            {props.data.map(item => (
                <Character charData={item} key={item.name} />
            ))}
        </div>
    );
}

export default AllCharacters;