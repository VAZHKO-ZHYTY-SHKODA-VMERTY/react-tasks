import { urls } from "../constants/urls";
import { apiService } from "./apiService";


const carService={
    getAll:()=>apiService.get(urls.cars.base),
    create:(data)=>apiService.post(urls.cars.base, data),
    update:(id, data)=>apiService.put(urls.cars.byId(id),data),
    delete:(id)=>apiService.delete(urls.cars.byId(id))
}

export {carService}