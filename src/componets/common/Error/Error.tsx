import styles from './Error.module.scss'
import { useEffect } from 'react';


type ErrorType = {
    message:string,
    open:boolean,
    setOpen:(param:boolean)=>void,

}

const Error = ({message,open = false,setOpen}:ErrorType) => {
    useEffect(()=> {
        if (open) {
            setTimeout(()=> {
                setOpen(false)
            },2000)
        }
    },[open])

    if (open) {
        return (<div className={styles.error_container}>
            <div className={styles.error_content}>
                {message}
            </div>
        </div>)
    }

    return (<>
        </>)
}

export default Error