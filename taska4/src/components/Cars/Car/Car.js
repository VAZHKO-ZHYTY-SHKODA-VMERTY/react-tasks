

const Car=({car, setNewCar})=>{
    const {id, brand,price,year}=car

    const deleteCar=(e)=>{
        e.preventDefault()
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {method:'DELETE'})
        .then(()=>{
            setNewCar(prev=!prev)
        })
    }

    return(
        <div>
            <p>Id: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button onClick={deleteCar}>Delete</button>
            <br/>
        </div>
    )
}

export default Car