import fetchBooksThunk from './../store/booksSlice';
import { OptionsType } from '../../../context/OptionSearchWrapper';
import {RootState} from "../../../store/store";


global.fetch = jest.fn()

// describe('fetchBooksThunk', ()=> {
//     it('goal:fetchBooksThunk',async ()=> {
//
//         const options:OptionsType = {
//             title:'cat',
//             startIndex:0,
//             category:'all',
//             order:'newest',
//         }
//         const state:RootState = {
//             books: {
//                 books: [{
//                     id: 'wrerw',
//                     volumeInfo: {
//                         title: 'Man',
//                         categories: ['art']
//                     }
//                 }],
//                 current: {
//                     id: 'wrerw',
//                     volumeInfo: {
//                         title: 'Man',
//                         categories: ['art']
//                     }
//                 },
//                 total: 430,
//                 status: 'idle',
//                 error: null,
//             }
//         }
//
//         const dispatch = jest.fn()
//         const thunk = fetchBooksThunk()
//
//         await thunk(dispatch,() => state,undefined)
//         const { calls } = dispatch.mock
//         expect(calls[0][0].type).toEqual('@fetchBooksThunk/books/pending')
//         expect(calls[1][0].type).toEqual('@fetchBooksThunk/books/fulfilled')
//         expect(calls[1][0].payload).toHaveLength(30)
//     })
// })