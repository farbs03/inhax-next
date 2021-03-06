import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Indiana Hax</title>
        <meta name="description" content="Fostering a culture of innovation in the greater Indianapolis area by connecting student creators through hackathons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='overflow-x-hidden min-h-screen dark:bg-gray-900 dark:text-white'>
        <div className='max-w-7xl p-4 mx-auto w-full'>
          <Component {...pageProps} />
        </div>
      </main>

      <Footer />
    </div>
    
  )
}

export default MyApp
