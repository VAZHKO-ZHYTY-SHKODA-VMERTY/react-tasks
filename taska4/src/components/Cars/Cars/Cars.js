import {useState, useEffect} from 'react'
import Car from '../Car/Car'

const Cars=({newCar, setNewCar})=>{
    const [cars, setCars]=useState([])
    
    useEffect(()=>{fetch('http://owu.linkpc.net/carsAPI/v1/cars')
                    .then(value=>value.json())
                    .then(value=>setCars(value))},[newCar])
    
    return(
        <div>
            {cars.map(car=><Car key={car.id} car={car} setNewCar={setNewCar}/>)}
        </div>
    )
}

export default Cars