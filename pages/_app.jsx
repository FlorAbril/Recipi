import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import RecipesProvider from '../store/recipesProvider'

function MyApp({Component, pageProps}) {
 
  return (
    <RecipesProvider>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700"/>
        <title>Recipπ 📖</title>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </RecipesProvider>
  )
}

export default MyApp
