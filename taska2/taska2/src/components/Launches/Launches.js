import React, { useEffect, useState } from "react";
import Launch from './Launch'

const Launches=()=>{
    let [launches, setLaunches]=useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/').then(value=>value.json())
                                                        .then(value=>setLaunches(value))
    },[])
    return(
        <div>
            {launches.filter(launch=>launch.launch_year!=='2020')
                     .map(launch=><Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    )
}

export default Launches