import { createContext, ReactNode, useContext, useState } from 'react';
import { useImmer } from "use-immer"


export type OptionsType = {
    title:string,
    startIndex:number,
    order:string,
    category:string,
}

type OptionContextType = {
    options:OptionsType,
    setTitle:(title:string) => void,
    setStart:(index:number) => void,
    setCategory:(category:string) => void,
    setOrder:(order:string) => void,
}

type OptionPropsType = {
    children:ReactNode,
}

export const OptionContext = createContext<OptionContextType | null>(null)

const OptionSearchWrapper = ({children}:OptionPropsType) => {
    const [options,setOptions] = useState({
        title:'',
        startIndex:0,
        order:'relevance',
        category:'all',
    })

    const setStart = (index:number) => {
        setOptions(prevState => {
            return {
                ...prevState,
                startIndex:index,
            }
        })
    }

    const setTitle = (title:string) => {
        setOptions(prevState => {
            return {
                ...prevState,
                title,
            }
        })
    }

    const setCategory = (category:string) => {
        setOptions(prevState => {
            return {
                ...prevState,
                category,
            }
        })
    }

    const setOrder = (order:string) => {
        setOptions(prevState => {
            return {
                ...prevState,
                order,
            }
        })
    }

    return (<OptionContext.Provider value={{
        options,
        setStart,
        setTitle,
        setCategory,
        setOrder,
    }}>
        {children}
    </OptionContext.Provider>)
}

export const useOptionsHook = () => useContext(OptionContext)
export default OptionSearchWrapper