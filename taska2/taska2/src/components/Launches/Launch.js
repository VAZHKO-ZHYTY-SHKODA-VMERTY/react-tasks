import React from "react";

const Launch=({launch})=>{
    const {mission_name,launch_year, links}=launch
    return(
        <div>
            <div>Mission name: {mission_name}</div>
            <div>Launch year: {launch_year}</div>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    )
}

export default Launch