import styles from './Header.module.scss';
import SearchForm from '../SearchForm /SearchForm';
import SelectInput from '../SelectInput/SelectInput';
import { useOptionsHook } from '../../context/OptionSearchWrapper';



const Header = () => {
    const option = useOptionsHook()
    const category = option?.options.category as string
    const setCategory = option?.setCategory as (category:string)=>void

    const order = option?.options.order as string
    const setOrder = option?.setOrder as (order:string)=>void

    const categories = ['all','art','computers','history','medical','poetry']
    const orders = ['relevance','newest']

    return (<section className={styles.header_container}>
        <header className={styles.header_content}>
            <h1 className={styles.header_content_title}>search for books</h1>
            <SearchForm/>
            <section className={styles.header_content_sort}>
                <SelectInput label={'categories'}
                             options={categories}
                             value={category}
                             setValue={setCategory}
                />
                <SelectInput label={'soring by'}
                             options={orders}
                             value={order}
                             setValue={setOrder}
                />
            </section>
        </header>
    </section>)
}

export default Header