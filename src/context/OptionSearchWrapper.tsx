import { createContext, ReactNode, useContext, useState } from 'react';


export type OptionsType = {
    title:string,
    startIndex:number,
}

type OptionContextType = {
    options:OptionsType,
    setTitle:(title:string) => void,
    setStart:(index:number) => void,
}

type OptionPropsType = {
    children:ReactNode,
}

const OptionContext = createContext<OptionContextType | null>(null)


const OptionSearchWrapper = ({children}:OptionPropsType) => {
    const [options,setOptions] = useState({
        title:'',
        startIndex:0,
    })

    const setStart = (index:number) => {
        setOptions(state=> {
            state.startIndex = index
            return state
        })
    }

    const setTitle = (title:string) => {
        setOptions(state=> {
            state.title = title
            return state
        })
    }

    return (<OptionContext.Provider value={{
        options,
        setStart,
        setTitle,
    }}>
        {children}
    </OptionContext.Provider>)
}

export const useOptionsHook = () => useContext(OptionContext)
export default OptionSearchWrapper