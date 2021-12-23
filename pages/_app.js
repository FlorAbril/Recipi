import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'

function MyApp({Component, pageProps}) {
  const [recipes, setRecipes] = useState([])
 
  return <>
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700"/>
      <title>Recipπ 📖</title>
    </Head>
    <Navbar/>
    <Component {...pageProps} recipes={recipes} setRecipes={setRecipes} />
    </>
}

export default MyApp
