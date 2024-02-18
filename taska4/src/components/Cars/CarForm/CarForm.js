import {useState} from 'react'

const CarForm=({setNewCar})=>{
    const initialState={
        brand:'',
        price:'',
        year:''
    }

    const [car,setCar]=useState(initialState)

    const handleInput=(e)=>{
        setCar(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const newCar=(e)=>{
        e.preventDefault()
        fetch('http://owu.linkpc.net/carsAPI/v1/cars',{
            headers:{'content-type':'application/json'},
            body:JSON.stringify(car),
            method:'POST'
        }).then(obj=>obj.json()).then(()=>{
            setNewCar(prev=>!prev)
            setCar(initialState)
        })
    }

    return(
        <form onSubmit={newCar}>
            <label>Brand:
                <input type='string' value={car.brand} name='brand'onChange={handleInput}/>
            </label><br/>
            <label>Price:
                <input type='integer' value={car.price} name='price' onChange={handleInput}/>
            </label><br/>
            <label>Year:
                <input type='integer' value={car.year} name='year' onChange={handleInput}/>
            </label><br/>
            <button>Add car</button><br/>
        </form>
    )
}

export default CarForm