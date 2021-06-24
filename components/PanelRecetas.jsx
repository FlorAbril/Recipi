import React from 'react';
import styles from '../styles/panel_recetas.module.css'
import PlusCard from './PlusCard';
import Card from './Card';
import recipes from '../server/recipesMock.json'


export default function PanelRecetas(){
return(<>
    <div className={styles['container']}>
      <PlusCard/>
     {
       recipes.map(recipe =><Card {...recipe} ></Card>)
     }
    </div>
</>)
}