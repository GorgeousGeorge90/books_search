import styles from './Header.module.scss';
import SearchForm from "../SearchForm /SearchForm";


const Header = () => {


    return (<section className={styles.header_container}>
        <header className={styles.header_content}>
            <h1 className={styles.header_content_title}>search for books</h1>
            <SearchForm/>
            <section>

            </section>
        </header>
    </section>)
}

export default Header