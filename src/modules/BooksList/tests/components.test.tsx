import BookItem from '../componets/BookItem/BookItem';
import CurrentBooksItem from '../componets/CurrentBookItem/CurrentBooksItem';
import BookList from '../BookList';
import { render } from '@testing-library/react';
import {BooksItemType, ResponseType} from "../types/types";
import * as reduxHooks from 'react-redux';
import {initialType} from "../store/booksSlice";
import {OptionsType, useOptionsHook} from "../../../context/OptionSearchWrapper";



jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector')

describe('components tests',()=> {
    it('goal:render BookItem component',()=> {

        const data:BooksItemType = {
            id:'dasd',
            volumeInfo: {
                title:'Ironman',
                authors:['Stan Lee'],
                imageLinks:{
                    thumbnail:'asdasd'
                },
                categories:['art']
            }
        }

        const view = render(<BookItem {...data}/>)
        expect(view).toMatchSnapshot()
    })

    it('goal:render CurrentBookItem', ()=> {

        const data:BooksItemType = {
            id:'er',
            volumeInfo: {
                title: 'Batman',
                authors: ['Lee'],
                description: 'Nice',
                categories: ['art'],
                imageLinks: {
                    thumbnail: 'pic'
                }
            }
        }

        const dispatch = jest.fn()
        mockedDispatch.mockReturnValue(dispatch)
        mockedSelector.mockReturnValue(data)

        const view = render(<CurrentBooksItem/>)
        expect(view).toMatchSnapshot()
    })
})
