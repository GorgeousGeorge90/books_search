import { createSlice } from '@reduxjs/toolkit';




type initialType = {
    books:ResponseType[],
    status:'idle' | 'pending' | 'fulfilled' | 'rejected',
    error:string | null,
}

const initialState:initialType = {
    books:[],
    status:'idle',
    error:null,
}

const booksSlice = createSlice({
    name: '@books',
    initialState,
    reducers:{},
    extraReducers:{}
})