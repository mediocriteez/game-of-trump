import css from './css.module.css'

const ButtonDescription = ({buttonName, buttonDescription, onClick}) => {
    return(
        <p className={css.buttonDescription} onClick={onClick}>
            <span>{buttonName}</span><span>{buttonDescription}</span>
        </p>
    )
}

export default ButtonDescription