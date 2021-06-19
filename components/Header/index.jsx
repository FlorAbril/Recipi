import React from 'react';
import styles from './styles.module.css'

export default function Header(){
return( <>
    <div className={styles.header}>
        <h1>Mis recetas</h1>
        <div className={styles.search}>
        {/* <span className={styles.material_icons}>search</span> */}
        <input type="text" className={styles.buscar} placeholder="Buscar" autocomplete="off"/>
        </div>
    </div>
</>
)
}