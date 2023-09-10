import {ChangeEvent, SyntheticEvent, useState} from 'react';


const useInput = (initialValue:string) => {
    const [value,setValue] = useState(initialValue)

    const onChange = (e:ChangeEvent<HTMLInputElement>):void => {
        setValue(e.target.value)
    }

    return { value, onChange }
}

export default useInput