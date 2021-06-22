import React from 'react';
import styles from '../styles/header.module.css'

export default function Header(){
return( <>
    <div className={styles.header}>
        <h1>Mis recetas</h1>
        <div className={styles.search}>
        <img src='search.svg' className={styles.search_icon}></img>        
        <input type="text" className={styles.buscar} placeholder="Buscar" autocomplete="off"/>
        </div>
    </div>
</>
)
}