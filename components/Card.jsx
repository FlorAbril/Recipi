import React, { useState } from "react";
import styles from '../styles/card.module.css'
import { useRouter } from 'next/router'
import Modal from "./Modal";

export default function Card(props) {
  const {date,title,detail,id,...rest} = props
  const router = useRouter()
  const [showModal,setShowModal] = useState(false)
 
  const handleClick = () => {
    // router.push(`/recipe/${id}`)
    setShowModal(!showModal)

  }

  return (
   <>
      {!showModal ?  
        <div {...rest} onClick={handleClick} className={styles['card']}>
          <p className={styles['date']}>{date}</p>
          <h2>{title}</h2>
          <div className={styles['detail']} >
            {detail}
          </div>
        </div>
      : <Modal close={handleClick} id={id}>
          <div {...rest} onClick={handleClick} className={`${styles['card']} ${styles['card-modal']}`} >
            <p className={styles['date']}>{date}</p>
            <h2>{title}</h2>
            <div className={styles['detail']} >
              {detail}
            </div>
          </div>
        </Modal>
      }
   </>
  )
      
  ;
}
