import React from 'react';
import styles from '../styles/form_card.module.css'


export default function FormCard(){
return(<>
    <div className={`${styles['card']} ${styles['nueva-receta']}`}>
        <form className={styles['form-receta']}>
            <input type="text" className={styles["titulo"]} placeholder="Título"/>
            <textarea className={styles['detalle']} placeholder="Escribe algo..." required></textarea>
            <div className={styles["form-options"]} >
                <div className={styles["labels"]}>
                    <label for="privado">
                        <input type="radio" name="público-privado" id="privado" checked=""/> 
                        <span>Privado</span>
                    </label>
                    <label for="público">
                        <input type="radio" name="público-privado" id="público"/> 
                        <span>Público</span>
                    </label>
                </div>
                <div className={styles["botones"]}>
                    <button id="guardar" type="submit">Guardar</button>
                    <button id="cancelar" type="reset">Cancelar</button>
                </div>
            </div>
        </form>
    </div>
</>)
}