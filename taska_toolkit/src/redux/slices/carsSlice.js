import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carService } from "../../services/carService";

const initialState={
    cars:[],
    carForUpdate: null,
    errors: null,
    isLoading: null
}

const all = createAsyncThunk(
    'carsSlice/all',
    async(_, thunkAPI)=>{
        try{
            const {data} = await carService.getAll();
            return data
        }catch(e){
            return thunkAPI.rejectWithValue(e.responce.data)
        }
    }
)

const carsSlice=createSlice({
    name:'carsSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [all.fulfilled]:(state,action)=>{
            state.cars = action.payload
        }
    }
})

const {reducer:carReducer, actions} = carsSlice

const carActions={
    all
}

export {carActions, carReducer}