import { baseURL } from "../constants/urls";
import { apiService } from "./apiService";


const carService={
    getAll:()=>apiService.get(baseURL.base),
    create:(data)=>apiService.post(baseURL.base, data),
    update:(id, data)=>apiService.put(baseURL.byId(id),data),
    delete:(id)=>apiService.delete(baseURL.byId(id))
}

export {carService}