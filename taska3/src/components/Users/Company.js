import React from 'react'

const Company=({company})=>{
    const {name,catchPhrase,bs}=company
    return(
        <div>
            <p>Name: {name}</p>
            <p>Catch phrase: {catchPhrase}</p>
            <p>Bs; {bs}</p>
        </div>
    )
}

export default Company