import { useAppSelector } from '../../store/hooks';
import { getBooks, getTotal } from './selectors/selectors';
import BookItem from "./componets/BookItem/BookItem";
import styles from './BookList.module.scss';


const BookList = () => {
    const books = useAppSelector(getBooks)
    const total = useAppSelector(getTotal)

    return (<section className={styles.books_list_container}>
        {
            books && total ? <>
                <h3>{total}</h3>
                <ul>
                    {
                        books.map(book => <li key={book.id}><BookItem {...book}/></li>)
                    }
                </ul>
            </> : <p>don't have any requests</p>
        }
    </section>)
}

export default BookList