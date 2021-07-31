import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/recipe.module.css'

const Recipe = ({ recipes }) => {
  const router = useRouter()
  const { id } = router.query
  const recipe = recipes.find(recipe => recipe.id === id)

  return <>
	{recipe ? <> 
		<Link href="/">
			<a style={{'margin-left':'1em'}}>
				← Volver al inicio
			</a>
		</Link>
		<div  className={styles['container']}>
          <p className={styles['date']}>{recipe.date}</p>
          <h2>{recipe.title}</h2>
          <div className={styles['detail']} >
            {recipe.detail.split('\n').map((p,i) => <p key={i}>{p}</p>)}
          </div>
    	</div>
	</> 
	: <main style={{'margin': '1.5rem'}}> 
		<h3>No se pudo encontrar esta receta :(</h3>
		<Link href="/">
			<a>
				← Volver al inicio
			</a>
		</Link>
	   </main>}
	</>
}

export default Recipe