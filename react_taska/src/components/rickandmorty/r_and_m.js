import React from "react";
import "./r_and_m.css"

const Character=({id,name,status,species,gender,image})=>{
    return(
        <div className="character">
            <h1>{id}{name}</h1>
            <img src={image} alt={name}/>
            <div className="details">
                <p>Name:{name}</p>
                <p>Status:{status}</p>
                <p>Species:{species}</p>
                <p>Gender:{gender}</p>
            </div>
        </div>
    )
}

export default Character