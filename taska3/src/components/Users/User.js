import React from 'react'
import UserAddress from './UserAddress'
import UserDetails from './UserDetails'
import Company from './Company'

const User=({user})=>{
    const {id,name,username,email,address,phone, website, company}=user
    return(
        <div>
            <UserDetails inf={{id,name,username,email,phone,website}}/>
            {/* <UserAddress inf={{address}}/> */}
            {/* <Company inf={{company}}/> */}
        </div>
    )
}

export default User