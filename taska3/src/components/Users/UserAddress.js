import React from 'react'

const UserAddress=({address})=>{
    const {street, suite, city}=address
    return(
        <div>
            <p>Street: {street}</p>
            <p>Suite: {suite}</p>
            <p>City: {city}</p>
        </div>
    )
}

export default UserAddress