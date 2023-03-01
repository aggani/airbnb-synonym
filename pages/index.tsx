import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home({ exploreData }) {
  return ( 
    <div >
      <Head>
        <title>airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold'>Explore Nearby</h2>
          {/* Pull data from API end points */ }
          {exploreData.map((item) => (
            <h1>{item.location}</h1>
          ))}
           
        </section>
      </main>
      
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/IPBM').
  then(
    (res) => res.json()
  );

  return{
      // props ek object hai, jisme key-value pairs hain 
    props: {
      exploreData,  // exploreData: exploreData
    },
  };
}
