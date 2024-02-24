import CarForm from "./CarForm/CarForm"
import Cars from "./Cars/Cars"

const CarsComponent =()=>{
    return(
        <div>
            <CarForm/>
            <p>Cars:</p>
            <Cars/>
        </div>
    )
}

export default CarsComponent