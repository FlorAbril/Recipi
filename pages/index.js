import Card from '../components/Card'
import Header from '../components/Header'
import Modal from '../components/Modal'
import PanelRecetas from '../components/PanelRecetas'

export default function Home({recipes, setRecipes}) {
  return ( 
    <div> 
      <div className='wrapper-main'>
        <Header/> 
        <PanelRecetas recipes={recipes} setRecipes={setRecipes}/>
        {/* <Modal>
          <Card date="27/7/2021" title="ejemplo" detail="holola" style={{'height':'100%','width':'80%','margin-top':'2em'}}></Card>
        </Modal> */}
      </div>
    </div>
)
}
