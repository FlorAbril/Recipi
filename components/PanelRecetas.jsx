import React from 'react';
import styles from '../styles/panel_recetas.module.css'
import PlusCard from './PlusCard';
import Card from './Card';



export default function PanelRecetas({recipes, setRecipes}){
return(<>
    <div className={styles['container']}>
      <PlusCard setRecipes={setRecipes}/>
     {
       recipes.map(recipe =><Card key={recipe.id} {...recipe}></Card>)
     }
    </div>
</>)
}