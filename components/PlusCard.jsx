import React from 'react';
import styles from '../styles/plus_card.module.css'
import { useRouter } from 'next/router'

export default function PlusCard(){
  const router = useRouter()

  const handleClick = () => {
    router.push(`/recipe/create`)	
  }

  return(
    <div  onClick={handleClick} className={`${styles.card} ${styles.plus_card}`} >
      <svg className={styles.plus_icon} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" />
        <path
          d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        <path
          d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0" />
      </svg>
    </div>
  )
}
