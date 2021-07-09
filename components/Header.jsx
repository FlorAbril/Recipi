import React from 'react';
import styles from '../styles/header.module.css'

export default function Header(){
return( <>
    <div className={styles.header}>
        <h1>Mis recetas</h1>
        <div className={styles.search}>
        <input type="text" className={styles.buscar} placeholder="Buscar" autoComplete="off"/>
        <img src='search.svg' className={styles.search_icon}></img>        
        </div>
    </div>
</>
)
}