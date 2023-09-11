import styles from './BaseButton.module.scss';


type BaseProps = {
    content:string,
    onClick:()=>void,
}

const BaseButton = ({content,onClick}:BaseProps) => {

    return (<button className={styles.base_button}
                    onClick={onClick}>
        {content}
    </button>)
}

export default BaseButton