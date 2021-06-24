import React from "react";
import styles from '../styles/card.module.css'

export default function Card(props) {
  const {date,title,detail} = props
  return (
    <>
      <div className={styles['card']}>
        <p className={styles['date']}>{date}</p>
        <h2>{title}</h2>
        <div className={styles['detail']} >
          {detail}
        </div>
      </div>
    </>
  );
}
