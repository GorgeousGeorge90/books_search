import booksReducer, { clearCurrent, initialType, setCurrent } from '../store/booksSlice';


const initialState:initialType = {
    books:[],
    current:{
        id:'wrerw',
        volumeInfo: {
            title:'Man',
        }
    },
    total:null,
    status:'idle',
    error:null,
}


describe('reducer tests',()=> {
    it('goal:to get default state with unknown type', ()=> {
        const result = booksReducer(initialState,{type:''})

        expect(result).toEqual(initialState)
    })

    it('goal:to set current with title - Batman', ()=> {
        const action = {
            type: setCurrent.type,
            payload: {
                id: 'asde',
                volumeInfo: {
                    title: 'Batman'
                }
            }
        }

        const result = booksReducer(initialState,action)

        if (result.current)
        expect(result.current.volumeInfo.title).toBe('Batman')
    })

    it('goal:to set current to null', () => {
        const result = booksReducer(initialState,({type:clearCurrent.type}))

        expect(result.current).toBe(null)
    })
})