import { useForm, SubmitHandler } from 'react-hook-form';
import { ReactComponent as Search } from './../../assets/img/search.svg';
import styles from './SearchFrom.module.scss';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {clearState, fetchBooksThunk} from '../../modules/BooksList/store/booksSlice';
import { useOptionsHook } from '../../context/OptionSearchWrapper';
import {useEffect, useState} from 'react';
import {getBooks} from "../../modules/BooksList/selectors/selectors";
import Error from '../common/Error/Error';



type FormProps = {
    title:string,
}

const SearchForm = () => {
    const dispatch = useAppDispatch()
    const books = useAppSelector(getBooks)
    const search = useOptionsHook()

    const { register, reset, handleSubmit, formState:{errors}} = useForm<FormProps>()
    const handleClick:SubmitHandler<FormProps> = data => {
        if (books.length !== 0) {
            dispatch(clearState())
        }
        search?.setTitle(data.title)
        reset()
    }
    const [open,setOpen] = useState(false)

    useEffect(()=> {
        if (search?.options.title !== '') {
            if (search) {
                dispatch(fetchBooksThunk(search.options))
            }
        }
    },[search?.options.title])

    useEffect(()=> {
        if (errors.title) {
            setOpen(true)
        }
    },[errors.title])


    return (<section className={styles.search_container}>
        <form onSubmit={handleSubmit(handleClick)}
              className={styles.search_content}>
            <input type='search'
                   className={styles.search_content_input}
                   {...register('title', { required:true })}
            />
            <button className={styles.search_content_btn}
            ><Search stroke={'white'}/></button>
        </form>
        {
            <Error open={open}
                   setOpen={setOpen}
                   message={'Fill the input before request!'}/>
        }
    </section>)
}

export default SearchForm