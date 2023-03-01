import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/smallCard'

export default function Home({ exploreData, cardsData }) {
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

        <section>
          <h2 className='text-4xl font-semibold'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 m-3'>
            {cardsData.map((item) =>(
              <MediumCard
                key = {item.img}
                img = {item.img}
                title = {item.title}
              />
            ))}
          </div>
        </section>
        
        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outfoors'
          description='Wishlist curated by airbnb-synonym'
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  
  const exploreData = await fetch('https://www.jsonkeeper.com/b/IPBM').
  then(
    (res) => res.json() // parse it to just give JSON data, otherwise it gives extra crap 
  );
  
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').
  then(
    (res) => res.json()
  );

  return{
      // props ek object hai, jisme key-value pairs hain 
    props: {
      exploreData,  // exploreData: exploreData
      cardsData,
    },
  };
}
