import {useAppDispatch, useAppSelector} from '../../store/hooks';
import { getBooks, getTotal } from './selectors/selectors';
import BookItem from './componets/BookItem/BookItem';
import styles from './BookList.module.scss';
import { fetchBooksThunk } from './store/booksSlice';
import {OptionsType, useOptionsHook} from '../../context/OptionSearchWrapper';
import {useEffect, useState} from 'react';



const BookList = () => {
    const dispatch = useAppDispatch()
    const search = useOptionsHook()
    const books = useAppSelector(getBooks)
    const total = useAppSelector(getTotal)

    useEffect(()=> {
        if (search?.options && books.length !==0 ) {
            dispatch(fetchBooksThunk(search.options))
        }
    },[search?.options.startIndex])



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
                    books.length !== 0 ? <button className={styles.books_list_btn}
                                                 onClick={()=> search?.setStart(books?.length)}
                    >load more</button>:null
                }
            </div> : null
        }
    </section>)
}

export default BookList
