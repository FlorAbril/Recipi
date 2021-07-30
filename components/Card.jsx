import React, { useState } from "react";
import styles from '../styles/card.module.css'
import { useRouter } from 'next/router'
import Modal from "./Modal";

export default function Card(props) {
  const {date,title,detail,id,...rest} = props
  const router = useRouter()
 
  const handleClick = () => {
    router.push(`/recipe/${id}`)

  }
   
  const formatedDetail = detail.split('\n')


  return (
    <div {...rest} onClick={handleClick} className={styles['card']}>
          <p className={styles['date']}>{date}</p>
          <h2>{title}</h2>
          <div className={styles['detail']} >
            {formatedDetail.map((p,i) => <p key={i}>{p}</p>)}
          </div>
    </div>

  )
      
  ;
}
