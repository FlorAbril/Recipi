import { useEffect } from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import Modal from '../components/Modal'
import PanelRecetas from '../components/PanelRecetas'
import { getAllRecipes } from '../server/notionApi'

export default function Home({results, recipes, setRecipes}) {
  useEffect(function(){
    setRecipes(results)

  },[] )
  return ( 
    <div> 
      <div className='wrapper-main'>
        <Header/> 
        <PanelRecetas recipes={recipes} setRecipes={setRecipes}/>
      </div>
    </div>
)
}

export async function getStaticProps(){
  const results = await getAllRecipes()
  const recipes = []
  results.forEach(recipe => {
    recipes.push(
      {
        date: recipe.properties.Date.date.start,
        id: recipe.id,
        title: recipe.properties.Title.title[0].plain_text,
        detail: recipe.properties.Detail.rich_text[0].plain_text
      }
    )
  });
  return {
    props: {
        results : recipes
    }
  }
}
