import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/smallCard'

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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map(({ img, distance, location }) =>(
              <SmallCard 
                key={img}
                img = {img}
                distance = {distance}
                location = {location}
              />
            ))}
          </div>
          
           
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
