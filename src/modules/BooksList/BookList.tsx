import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getFull} from './selectors/selectors';
import BookItem from './componets/BookItem/BookItem';
import styles from './BookList.module.scss';
import { fetchBooksThunk } from './store/booksSlice';
import { useOptionsHook } from '../../context/OptionSearchWrapper';
import { useEffect } from 'react';
import CurrentBooksItem from "./componets/CurrentBookItem/CurrentBooksItem";
import {ReactComponent as Spinner} from './../../assets/img/spinner.svg';
import BaseButton from '../../UI/BaseButton';



const BookList = () => {
    const dispatch = useAppDispatch()
    const search = useOptionsHook()
    const { books, total, current, status, error } = useAppSelector(getFull)

    useEffect(()=> {
        if (search?.options && books.length !==0 ) {
            dispatch(fetchBooksThunk(search.options))
        }
    },[search?.options.startIndex])

    useEffect(()=> {
        console.log(error)
    },[error])

    if (current) {
        return <CurrentBooksItem/>
    }

    if (status === 'pending' && books.length === 0) {
        return  <Spinner/>
    }


    return (<section className={styles.books_list_container}>
        {
            books ? <div className={styles.books_list_content}>
                {
                    total ? <h3 className={styles.books_list_title}>found {total} results</h3>:
                            <h3 className={styles.books_list_title}>don't have any requests</h3>
                }
                <ul className={styles.books_list_list}>
                    {
                        books.map(book => <li className={styles.books_list_list_item}
                                              key={book.id}><BookItem {...book}/></li>)
                    }
                </ul>
                {
                    books.length !== 0 ? <BaseButton content={ status === 'pending' ? 'loading...':'load more'}
                                                      onClick={()=> search?.setStart(books?.length)}/>:null
                }
            </div> : null
        }
    </section>)
}

export default BookList
