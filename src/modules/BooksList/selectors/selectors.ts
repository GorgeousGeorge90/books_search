import { RootState } from '../../../store/store';


export const getBooks = (state:RootState) => state.books.books
export const getTotal = (state:RootState) => state.books.total