
const baseURL = 'http://owu.linkpc.net/carsAPI/v1/cars'

const cars='/cars'

const urls={
    cars:{
        baseURL:cars,
        byId:(id)=>`${cars}/${id}`
    }
}

export {
    baseURL,
    urls,
    cars
}