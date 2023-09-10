import styles from './BookItem.module.scss';
import { BooksItemType } from '../../types/types';
import { FC } from 'react';



const BookItem:FC<BooksItemType> = ({...props}) => {

    const { title, authors, imageLinks, categories} = props.volumeInfo

    return (<div className={styles.book_container}>
            <div className={styles.book_content}>
                <img className={styles.book_content_logo}
                     src={imageLinks ? imageLinks.thumbnail:''}
                     alt='pic'/>
                <>
            {
                categories ?  <p className={styles.book_content_category}>{categories[0]}</p>:null
            }
            <h3 className={styles.book_content_title}>{title}</h3>
            {
                authors ?  <ul className={styles.book_content_list}>
                    {
                        authors.map((item,i) => <li className={styles.book_content_list_authors} key={i}>{item}</li>)
                    }
                </ul>:null
            }
            </>
            </div>
        </div>)
}

export default BookItem