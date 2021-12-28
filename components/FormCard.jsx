import React, { useContext, useState } from 'react';
import { RecipesContext } from '../store/recipesProvider';
import { ACTIONS } from '../store/RecipesReducer';
import styles from '../styles/form_card.module.css'
import { useRouter } from 'next/router';

export default function FormCard(){
    const {dispatch} = useContext(RecipesContext)
    const [formData, setFormData] = useState(() => {
        const randomId= Math.random().toString(36).substring(7)
        const date = new Date()
        const formatDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        return {id: randomId, date:formatDate, title: '', detail:''}
    })
    const router = useRouter()

    const handleCancel = () => {
        router.push(`/`)
    }

    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        dispatch({type: ACTIONS.addRecipe, payload: formData})
        router.push(`/`)
    }

return(<>
    <div className={`${styles['card']} ${styles['form-receta']}`}>
        <form className={styles['form-receta']}>
            <input name="title" type="text" className={styles["titulo"]} placeholder="Título" value={formData['title']} onChange={handleChange}/>
            <textarea name="detail" className={styles['detalle']} placeholder="Escribe algo..." value={formData['detail']} onChange={handleChange} required></textarea>
            <div className={styles["form-options"]} >
                <select>
                    <option value="private">Privado</option>
                    <option value="public">Público</option>
                </select>
                <div className={styles["botones"]}>
                    <button id="cancelar" type="reset" onClick={handleCancel}>Cancelar</button>
                    <button id="guardar" type="submit" onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </form>
    </div>
</>)
}