import {getBooks, getTotal, getCurrent, getStatus, getError} from '../selectors/selectors';
import { RootState } from "../../../store/store";


const initialState:RootState = {
    books: {
        books: [{
            id: 'wrerw',
            volumeInfo: {
                title: 'Man',
                categories:['art']
            }
        }],
        current: {
            id: 'wrerw',
            volumeInfo: {
                title: 'Man',
                categories:['art']
            }
        },
        total: 430,
        status: 'idle',
        error: 'Error!',
    }
}


describe('selectors tests', ()=> {
    it('goal:get array books with length 1 and title Man', () => {
        const result = getBooks(initialState)
        expect(result).toHaveLength(1)
        expect(result[0].volumeInfo.title).toBe('Man')
    })

    it('goal:get total with value 430',()=> {
        const result = getTotal(initialState)
        expect(result).toBe(430)
    })

    it('goal:get current with id:wrerw',()=> {
        const result = getCurrent(initialState)
        expect(result?.id).toBe('wrerw')
    })

    it('goal:get status with idle value',() => {
        const result = getStatus(initialState)
        expect(result).toBe('idle')
    })

    it('goal:get error with Error! value', () => {
        const result = getError(initialState)
        expect(result).toBe('Error!')
    })
})