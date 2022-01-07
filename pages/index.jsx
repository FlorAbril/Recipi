import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import PanelRecetas from '../components/PanelRecetas'
import { getAllRecipes } from '../services/notionApi'
import { RecipesContext } from '../store/RecipesProvider'
import { ACTIONS } from '../store/RecipesReducer'

export default function Home({recipes}) {
  const {dispatch} = useContext(RecipesContext)

  useEffect(()=>{
    const a = async () => {
      await dispatch({type: ACTIONS.addInitialRecipe, payload: JSON.parse(recipes)})
    }
    a()
  },[] )

  return ( 
    <div> 
      <div className='wrapper-main'>
        <Header/> 
        <PanelRecetas  />
      </div>
    </div>
)
}

export async function getStaticProps(){
  const recipes = await getAllRecipes()
  return {
    props: {
      recipes: JSON.stringify(recipes)
    }
  }
}
