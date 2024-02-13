import React from 'react'
import './simpson.css'

const Simpson =(props)=>{
    let {name,surname, picture}=props
    return(
        <div className='character'>
            <h3>{name}{surname}</h3>
            <img src={picture} alt={name}/>
        </div>
    )
}

export default Simpson