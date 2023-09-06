import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BooksServices from './../services/services';
import BooksLocalService from './../services/local_services';
import {BooksItemType, ResponseType} from '../types/types';



export const fetchBooksThunk = createAsyncThunk<
    ResponseType,
    undefined,
    {
        rejectValue:string,
    }
    >(
    '@fetchBooksThunk/books',
    async (_,{rejectWithValue})=> {
            const response = await BooksServices.fetchBooks('react')
            if (response.status === 200) {
                const {data} = response
                data.items = BooksLocalService.toLocalType(data.items)
                return data as ResponseType
            } else {
                return rejectWithValue(response.statusText)
        }
    })

type initialType = {
    books:BooksItemType[],
    total:null | number,
    status:'idle' | 'pending' | 'fulfilled' | 'rejected',
    error:string | null,
}

const initialState:initialType = {
    books:[],
    total:null,
    status:'idle',
    error:null,
}

const booksSlice = createSlice({
    name: '@books',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(fetchBooksThunk.pending, (state)=> {
                state.status = 'pending'
            })

            .addCase(fetchBooksThunk.fulfilled, (state,action)=> {
                const { items,totalItems } = action.payload
                state.books.push(...items)
                state.total = totalItems
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

export default booksSlice.reducer