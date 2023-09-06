import styles from './BookItem.module.scss';
import { BooksItemType } from '../../types/types';
import { FC } from "react";



const BookItem:FC<BooksItemType> = ({
                                        title,
                                        authors,
                                        categories,
                                        imageLinks,
                                    }) => {

    return (<div className={styles.book_container}>
        <div className={styles.book_content}>
            <img className={styles.book_content_logo}
                 src={imageLinks.thumbnail}
                 alt='pic'/>
            <h3 className={styles.book_content_title}>{title}</h3>
            </div>
        </div>)
}

export default BookItem