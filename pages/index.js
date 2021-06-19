import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import PanelRecetas from '../components/PanelRecetas'

export default function Home() {
  return (<> 
    <div>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700"/>
        <title>Recipπ 📖</title>
      </Head>
      <Navbar/>
      <div className='wrapper-main'>
        <Header/> 
        <PanelRecetas/>
      </div>
    </div>
  
  
  </>
)
}
