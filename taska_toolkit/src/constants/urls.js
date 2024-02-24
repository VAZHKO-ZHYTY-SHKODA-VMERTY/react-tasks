const baseURL = process.env.REACT_APP_API

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