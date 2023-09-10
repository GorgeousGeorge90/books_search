import BookItem from '../componets/BookItem/BookItem';
import BookList from '../BookList';
import { render } from '@testing-library/react';
import {BooksItemType, ResponseType} from "../types/types";
import * as reduxHooks from 'react-redux';



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

    it('goal:render BooksList component', ()=> {
        const data= {
            total:1,
            books:[{id:'dasd',volumeInfo: {
            title:'Ironman',
                authors:['Stan Lee'],
                imageLinks:{
                thumbnail:'asdasd'
            },
            categories:['art']
        }}],
        }

        const dispatch = jest.fn()
        mockedDispatch.mockReturnValue(dispatch)
        mockedSelector.mockReturnValue(data)

        const view = render(<BookList/>)
        expect(view).toMatchSnapshot()
    })
})
