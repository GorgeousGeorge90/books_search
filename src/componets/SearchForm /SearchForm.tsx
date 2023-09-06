import { useForm, SubmitHandler } from 'react-hook-form';
import { ReactComponent as Search } from './../../assets/img/search.svg';
import styles from './SearchFrom.module.scss';


type FormProps = {
    title:string,
}

const SearchForm = () => {
    const { register, reset, handleSubmit, formState:{errors}} = useForm<FormProps>()
    const handleClick:SubmitHandler<FormProps> = data => {
        console.log(data)
        reset()
    }

    return (<section className={styles.search_container}>
        <form onSubmit={handleSubmit(handleClick)}
              className={styles.search_content}>
            <input type="text"
                   className={styles.search_input}
                   {...register('title', { required:true })}
            />
            <button className={styles.search_btn}><Search/></button>
        </form>
    </section>)
}

export default SearchForm