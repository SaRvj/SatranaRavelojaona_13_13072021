import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/Reducers'

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});