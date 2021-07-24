import styles from '../styles/modal.module.css'

export default function Modal ({children}){
    const handleClick = () =>{
        
    }
    
    return(
    <div className={`${styles['modal']} ${styles['is-open']}`}>
        <div className={styles["modal-container"]}>
            <button onClick={handleClick}
             className={styles["modal-close"]}>X</button>
            {children}
        </div>
    </div>
    )
}