import React, { useContext } from 'react';
import styles from '../styles/panel_recetas.module.css'
import PlusCard from './PlusCard';
import Card from './Card';
import { RecipesContext } from '../store/recipesProvider';



export default function PanelRecetas(){
const {state} = useContext(RecipesContext)
const {recipes} = state

return(<>
    <div className={styles['container']}>
      <PlusCard/>
     {
       recipes?.map(recipe =><Card key={recipe.id} {...recipe}></Card>)
     }
    </div>
</>)
}