import styles from './BookItem.module.scss';
import { BooksItemType } from '../../types/types';
import { FC } from 'react';
import { useAppDispatch } from '../../../../store/hooks';
import { setCurrent } from '../../store/booksSlice';
import SupportService from './../../../../utils/utils';



const BookItem:FC<BooksItemType> = ({...props}) => {
    const dispatch = useAppDispatch()

    const { title, authors, imageLinks, categories} = props.volumeInfo

    return (<div className={styles.book_container}>
            <div className={styles.book_content}>
                <img className={styles.book_content_logo}
                     src={imageLinks ? imageLinks.thumbnail:''}
                     alt='pic'
                     onClick={()=>dispatch(setCurrent(props?.id))}
                />
                <>
            {
                categories ?  <p className={styles.book_content_category}>{categories[0]}</p>:null
            }
            <h3 className={styles.book_content_title}>{title}</h3>
            {
                authors ?  <ul className={styles.book_content_list}>
                    {
                        SupportService.addComma(authors).slice(0,3).map((item,i) => <li className={styles.book_content_list_authors} key={i}>{item}</li>)
                    }
                </ul>:null
            }
            </>
            </div>
        </div>)
}

export default BookItem