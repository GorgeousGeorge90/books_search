import { ChangeEvent, FC } from 'react';
import styles from './SelectInput.module.scss';


type SelectType = {
    label:string,
    options:string[],
    value:string,
    setValue:(value:string)=>void;
}

const SelectInput:FC<SelectType> = ({label,options,value,setValue}) => {
    const handleChange = (e:ChangeEvent<HTMLSelectElement>):void => {
        setValue(e.currentTarget.value)
    }

    return (<section className={styles.select_container}>
        <div className={styles.select_content}>
            <label  className={styles.select_content_title}
                    htmlFor={`id_${label}`}>{label}</label>
            <select id={`id_${label}`}
                    value={value}
                    onChange={handleChange}
                    className={styles.select_content_input}>
                {
                    options.map((option, i) => <option key={i}
                                                                      value={option}>
                        {option}
                    </option>)
                }
            </select>
        </div>
    </section>)
}

export default SelectInput