import { useDispatch } from "react-redux"
import { carActions } from "../../../redux/slices/carsSlice"

const Car=({car})=>{
    const dispatch = useDispatch()
    
    const {id, brand, price,year} = car


    return(
        <div>
            <p>Id: {id}</p>
            <p>Brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button onClick={()=>dispatch(carActions.updateCar(car))}>update</button>
            <button onClick={()=>dispatch(carActions.deleteCar({id}))}>delete</button>
        </div>
    )
}

export default Car