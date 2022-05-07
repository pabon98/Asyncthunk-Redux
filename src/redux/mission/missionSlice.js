import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMissions = createAsyncThunk(
    "missions/getMissions",
    async()=>{
        return fetch("https://api.spacexdata.com/v3/launches").then((res)=> res.json())
    }
)
export const missionSlice = createSlice({
    name: 'missions',
    initialState: {
        missions: [],
        loading: false,
    },
    extraReducers: {
        [getMissions.pending] : (state, action)=>{
            state.loading = true;
        },
        [getMissions.fulfilled] : (state, action)=>{
            state.loading = false;
            state.missions = action.payload
        },
        [getMissions.rejected] : (state, action)=>{
            state.loading = false
        }
    }
})