import Header from '../components/Header'
import PanelRecetas from '../components/PanelRecetas'

export default function Home({recipes, setRecipes}) {
  return ( 
    <div> 
      <div className='wrapper-main'>
        <Header/> 
        <PanelRecetas recipes={recipes} setRecipes={setRecipes}/>
      </div>
    </div>
)
}
