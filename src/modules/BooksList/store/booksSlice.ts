import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import BooksServices from './../services/services';
import { BooksItemType, ResponseType } from '../types/types';
import { OptionsType } from "../../../context/OptionSearchWrapper";


export const fetchBooksThunk = createAsyncThunk<
    ResponseType,
    OptionsType,
    {
        rejectValue:string,
    }
    >(
    '@fetchBooksThunk/books',
    async (payload,{rejectWithValue})=> {
            const {title, startIndex, category, order} = payload
            const response = await BooksServices.fetchBooks({title,startIndex,category,order})
            if (response.status === 200) {
                return response.data as ResponseType
            } else {
                return rejectWithValue(response.statusText)
        }
    })

export type initialType = {
    books:BooksItemType[],
    current:BooksItemType | null,
    total:null | number,
    status:'idle' | 'pending' | 'fulfilled' | 'rejected',
    error:string | null,
}

const initialState:initialType = {
    books:[],
    current:null,
    total:null,
    status:'idle',
    error:null,
}

const booksSlice = createSlice({
    name: '@books',
    initialState,
    reducers:{
        setCurrent:(state,action:PayloadAction<BooksItemType>) => {
            state.current = action.payload
        },
        clearCurrent:(state) => {
            state.current = null
        },
        clearState:(state) => {
            for (let key in state) {
                if (key === 'books') {
                    state[key] = []
                } else if (key === 'current') {
                    state[key] = null
                } else if (key === 'total') {
                    state[key] = null
                }
            }
        },
    },
    extraReducers:builder => {
        builder
            .addCase(fetchBooksThunk.pending, (state)=> {
                state.status = 'pending'
            })

            .addCase(fetchBooksThunk.fulfilled, (state,action)=> {
                const { items,totalItems } = action.payload
                state.books.push(...items)
                if (!state.total) {
                    state.total = totalItems
                }
                state.status = 'fulfilled'
            })

            .addCase(fetchBooksThunk.rejected, (state,action)=> {
                if (action.payload) {
                    state.error = action.payload
                    state.status = 'rejected'
                }
            })
    }
})


export const { setCurrent,clearState,clearCurrent } = booksSlice.actions
export default booksSlice.reducer