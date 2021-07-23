import React from "react";
import styles from '../styles/card.module.css'
import { useRouter } from 'next/router'

export default function Card(props) {
  const {date,title,detail,id, ...rest} = props
  const router = useRouter()
  const handleClick = () => {
    router.push(`/recipe/${id}`)
  }

  return (
      <div {...rest} onClick={handleClick} className={styles['card']}>
        <p className={styles['date']}>{date}</p>
        <h2>{title}</h2>
        <div className={styles['detail']} >
          {detail}
        </div>
      </div>
  );
}
