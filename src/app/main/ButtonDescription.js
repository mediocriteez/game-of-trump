import css from './css.module.css'

const ButtonDescription = ({buttonName, buttonDescription}) => {
    
    return(
        <p className={css.buttonDescription}>
            <span>{buttonName}</span><span>{buttonDescription}</span>
        </p>
    )
}

export default ButtonDescription