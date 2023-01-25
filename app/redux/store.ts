import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from './todoSlice'

export const store = configureStore({
    reducer: {
        todolist: todoListSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch