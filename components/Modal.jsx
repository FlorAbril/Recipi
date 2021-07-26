import styles from '../styles/modal.module.css'
import Link from 'next/link'

export default function Modal ({children,close,id}){
    const handleClick = () =>{
        close()
    }
    
    return(
    <div className={`${styles['modal']} ${styles['is-open']}`}>
        <div className={styles["modal-container"]}>
            <button onClick={handleClick}
             className={styles["modal-close"]}>X</button>
            <Link href={`/recipe/${id}`} >
			    <a>Open as a page</a>
		    </Link>
            {children}
        </div>
    </div>
    )
}