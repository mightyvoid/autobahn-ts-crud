import { configureStore } from '@reduxjs/toolkit'
import { dashReducer } from "./dashReducer";

export const store = configureStore({
    reducer:{
    // dash:dashReducer
    }
});
