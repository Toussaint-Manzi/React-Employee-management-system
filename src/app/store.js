import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todoApp' 

export const store = configureStore ({
    reducer:{
        todos:todoReducer
    }
})
