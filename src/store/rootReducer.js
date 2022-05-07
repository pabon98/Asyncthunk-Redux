import { combineReducers } from "@reduxjs/toolkit";
import { missionSlice } from "../redux/mission/missionSlice";
 export const rootReducer = combineReducers({
   missions: missionSlice.reducer
 })