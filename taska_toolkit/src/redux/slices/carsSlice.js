import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carService } from "../../services/carService";

const initialState={
    cars:[],
    carForUpdate: null,
    errors: null,
    isLoading: null
}

const add= createAsyncThunk(
    'carsSlice/add',
    async({car}, thunkAPI)=>{
        try{
            await carService.create(car)
            thunkAPI.dispatch(all())
        }catch(e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const all = createAsyncThunk(
    'carsSlice/all',
    async(_, thunkAPI)=>{
        try{
            const {data} = await carService.getAll();
            return data
        }catch(e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const update = createAsyncThunk(
    'carsSlice/update',
    async({id, car}, thunkAPI)=>{
        try{
            await carService.update(id, car)
            thunkAPI.dispatch(all())
        }catch(e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carsSlice',
    async({id}, thunkAPI)=>{
        try{
            await carService.delete(id)
            thunkAPI.dispatch(all())
        }catch(e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carsSlice=createSlice({
    name:'carsSlice',
    initialState,
    reducers: (create)=> ({
        updateCar:create.reducer((state, action)=>{
            state.carForUpdate=action.payload
        })
    }),
    extraReducers: (build) =>
    {build
        .addCase(all.fulfilled, (state, { payload }) => {
            state.cars = payload;
        })
        .addCase(add.fulfilled, (state) =>{
              
        })
        .addCase(update.fulfilled, state=>{
            state.carForUpdate=null
        })
        .addCase(deleteCar.fulfilled, state=>{})
    }

})

   const {reducer:carReducer, actions:{updateCar} } = carsSlice

const carActions={
    all,
    add,
    updateCar,
    update,
    deleteCar
}

export {carActions, carReducer}