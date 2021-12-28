import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import PanelRecetas from '../components/PanelRecetas'
import { getAllRecipes } from '../services/notionApi'
import { useRouter } from 'next/router'
import { RecipesContext } from '../store/recipesProvider'
import { ACTIONS } from '../store/RecipesReducer'

export default function Home({recipes}) {
  const {dispatch} = useContext(RecipesContext)

  useEffect(function(){
    dispatch({type: ACTIONS.addInitialRecipe, payload: recipes})
  },[] )

  const router = useRouter()
 
  const handleClick = () => {
    router.push(`/create`)

  }
  return ( 
    <div> 
      <div className='wrapper-main'>
        <Header/> 
        <img  onClick={handleClick} src='add.png' className={'add-img'} ></img>
        <PanelRecetas  />
      </div>
    </div>
)
}

export async function getStaticProps(){
  const recipes = await getAllRecipes()
  return {
    props: {
      recipes
    }
  }
}
