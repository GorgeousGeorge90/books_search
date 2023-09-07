import {useAppDispatch, useAppSelector} from '../../store/hooks';
import { getBooks, getTotal } from './selectors/selectors';
import BookItem from './componets/BookItem/BookItem';
import styles from './BookList.module.scss';
import { fetchBooksThunk } from './store/booksSlice';
import { useOptionsHook } from '../../context/OptionSearchWrapper';
import {useEffect} from "react";


const BookList = () => {
    const dispatch = useAppDispatch()
    const options = useOptionsHook()
    const books = useAppSelector(getBooks)
    const total = useAppSelector(getTotal)
    useEffect(()=> {
        options?.setStart(books.length)
    },[books])


    return (<section className={styles.books_list_container}>
        {
            books ? <div className={styles.books_list_content}>
                {
                    total ? <h3>found {total} results</h3>: <p>don't have any requests</p>
                }
                <ul className={styles.books_list_list}>
                    {
                        books.map(book => <li className={styles.books_list_list_item}
                                              key={book.id}><BookItem {...book}/></li>)
                    }
                </ul>
                <button onClick={()=> {
                    if (options)
                        dispatch(fetchBooksThunk(options.options))
                }}>load more</button>
            </div> : null
        }
    </section>)
}

export default BookList
