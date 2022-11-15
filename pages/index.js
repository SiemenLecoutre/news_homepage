import Head from 'next/head'
import Bottom from '../components/Bottom'
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import News from '../components/News'


export default function Home() {
  return (
    <div className='page-grid'>
      <Head>
        <title>News Homepage - Frontendmentor.io</title>
        <meta name="description" content="News Homepage - Frontendmentor.io" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />

      {/* Do i need to wrap this in a <main> tag? */}
      <Featured />
      <News />
      <Bottom />

    </div>
  )
}
