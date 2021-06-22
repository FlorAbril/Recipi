import React from 'react';
import styles from '../styles/form_card.module.css'


export default function FormCard({cancel}){

    const handleClick = () =>{
        cancel()
    }
return(<>
    <div className={`${styles['card']} ${styles['nueva-receta']}`}>
        <form className={styles['form-receta']}>
            <input type="text" className={styles["titulo"]} placeholder="Título"/>
            <textarea className={styles['detalle']} placeholder="Escribe algo..." required></textarea>
            <div className={styles["form-options"]} >
                <select>
                    <option value="private">Privado</option>
                    <option value="public">Público</option>
                </select>
                <div className={styles["botones"]}>
                    <button id="guardar" type="submit">Guardar</button>
                    <button id="cancelar" type="reset" onClick={handleClick}>Cancelar</button>
                </div>
            </div>
        </form>
    </div>
</>)
}