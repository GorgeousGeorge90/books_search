import {combineReducers, configureStore} from '@reduxjs/toolkit';
import booksReducer from '../modules/BooksList/store/booksSlice';


const rootReducer = combineReducers({
    books:booksReducer,
})

const store = configureStore({
    reducer:rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store