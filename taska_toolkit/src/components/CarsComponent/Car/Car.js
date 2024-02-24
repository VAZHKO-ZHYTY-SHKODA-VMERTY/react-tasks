const Car=({car})=>{
    const {id, brand, price,year} = car
    return(
        <div>
            <p>Id: {id}</p>
            <p>Brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button>update</button>
            <button>delete</button>
        </div>
    )
}

export default Car