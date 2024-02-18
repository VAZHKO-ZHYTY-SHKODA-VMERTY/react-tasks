import {useState} from 'react'
import CarForm from "../CarForm/CarForm"
import Cars from "../Cars/Cars"


const CarContainer=()=>{
    const [newCar, setNewCar]=useState(null)
    return(
        <div>
            <CarForm setNewCar={setNewCar}/>
            <br/>
            <Cars newCar={newCar} setNewCar={setNewCar}/>
        </div>
    )
}

export default CarContainer