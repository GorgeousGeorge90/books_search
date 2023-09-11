import styles from './CurrentBooksItem.module.scss';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import { getCurrent } from '../../selectors/selectors';
import {BooksItemType} from "../../types/types";
import {clearCurrent} from "../../store/booksSlice";
import BaseButton from "../../../../UI/BaseButton";
import SupportService from './../../../../utils/utils';


const CurrentBooksItem = () => {
    const current = useAppSelector(getCurrent)
    const dispatch = useAppDispatch()
    const { title, authors, description, categories, imageLinks } = current?.volumeInfo as BooksItemType['volumeInfo']

    return (<section className={styles.current_container}>
        <div className={styles.current_content}>
            <aside className={styles.current_aside}>
                <img className={styles.current_aside_pic}
                     src={imageLinks?.medium ? imageLinks.medium:imageLinks?.thumbnail} alt='pic'/>
                {
                    authors ? <ul className={styles.current_aside_makers}>
                        {
                            SupportService.addComma(authors).map((item,i) => <li key={i}>{item}</li>)
                        }
                    </ul>:null
                }
            </aside>
            <main className={styles.current_info}>
                <h3 className={styles.current_info_title}>{title}</h3>
                {
                    categories ? <p className={styles.current_info_category}>{categories[0]}</p>:null
                }
                <p className={styles.current_info_text}>{description ? description:`Sorry!This book doesn't have any description!`}</p>
                <BaseButton content={'back to list'}
                            onClick={()=>dispatch(clearCurrent())}
                />
            </main>
        </div>

    </section>)
}

export default CurrentBooksItem