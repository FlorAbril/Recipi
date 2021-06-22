import React from 'react';
import styles from '../styles/panel_recetas.module.css'
import PlusCard from './PlusCard';
import Card from './Card';
import FormCard from './FormCard';

export default function PanelRecetas(){
return(<>
    <div className={styles['container']}>
     <PlusCard/>
      <FormCard></FormCard>
      <Card></Card>
    </div>
</>)
}