import booksReducer, {clearCurrent, clearState, fetchBooksThunk, initialType, setCurrent} from '../store/booksSlice';



const initialState:initialType = {
    books:[{
        id:'wrerw',
        volumeInfo: {
            title:'Man',
            categories:['art']
        },

    },{id:'1', volumeInfo: {
            title:'Batman',
            categories:['art']
        }}],
    current:{
        id:'wrerw',
        volumeInfo: {
            title:'Man',
            categories:['art']
        }
    },
    total:430,
    status:'idle',
    error:null,
}


describe('reducer tests',()=> {
    it('goal:to get default state with unknown type', ()=> {
        const result = booksReducer(initialState,{type:''})

        expect(result).toEqual(initialState)
    })

    it('goal:to set current with id - 1', ()=> {
        const action = {
            type: setCurrent.type,
            payload: '1'
        }

        const result = booksReducer(initialState,action)
        if (result.current)
        expect(result.current.volumeInfo.title).toBe('Batman')
    })

    it('goal:to set current to null', () => {
        const result = booksReducer(initialState,({type:clearCurrent.type}))
        expect(result.current).toBe(null)
    })

    it('goal:to clear state and get books.length to 0, current to null and total to null',()=> {
        const result = booksReducer(initialState,({type:clearState.type}))
        expect(result.current).toBe(null)
        expect(result.books).toHaveLength(0)
        expect(result.total).toBe(null)
    })

    it('goal:change status with fetchBooksThunk.pending action', ()=> {
        const result = booksReducer(initialState,({type:fetchBooksThunk.pending.type}))
        expect(result.status).toBe('pending')
        expect(result.error).toBeNull()
    })

    it('goal:change status with fetchBooksThunk.fulfilled action', ()=> {

        const action = {
            type:fetchBooksThunk.fulfilled.type,
            payload:{
                totalItems:0,
                items:[{
                    id:'wrerwew',
                    volumeInfo: {
                        title:'Man1',
                        categories:['art']
                    }
                }]
            }

        }
        const result = booksReducer(initialState,action)
        expect(result.status).toBe('fulfilled')
        expect(result.books).toHaveLength(3)

    })

    it('goal:change status with fetchBooksThunk.rejected action', ()=> {
        const result = booksReducer(initialState,({type:fetchBooksThunk.rejected.type, payload:'Error!'}))
        expect(result.status).toBe('rejected')
        expect(result.error).toBe('Error!')
    })



})

