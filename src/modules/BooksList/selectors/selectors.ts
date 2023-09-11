import { RootState } from '../../../store/store';

export const getFull = (state:RootState) => state.books
export const getBooks = (state:RootState) => state.books.books
export const getTotal = (state:RootState) => state.books.total
export const getCurrent = (state:RootState) => state.books.current
export const getStatus = (state:RootState) => state.books.status
export const getError = (state:RootState) => state.books.error