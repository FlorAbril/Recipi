import { useRouter } from 'next/router'
import Card from '../../components/Card'
import Link from 'next/link'

const Recipe = ({ recipes }) => {
  const router = useRouter()
  const { id } = router.query
  const recipe = recipes.find(recipe => recipe.id === id)

  return <>
	{recipe ? <>
		<Card {...recipe} style={{'margin':'1.5rem', 'min-height': '85vh'}}/>
	</> : <main style={{'margin': '1.5rem'}}> 
		<h1>No existe esta receta</h1>
		<Link href="/">
			<a>
				Volver al inicio
			</a>
		</Link>
	</main>}
	</>
}

export default Recipe