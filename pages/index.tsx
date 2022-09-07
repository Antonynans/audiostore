// import React from 'react';
import type { NextPage } from 'next'
import Banner1 from '../components/banner1'
import Categories from '../components/categories'
// import { Header } from '../components/header'
import HeroBanner from '../components/herobanner'
import { Layout } from '../components/layout'


const Home: NextPage = () => {
  return (
   <>
   <Layout>
   <HeroBanner />
   <Categories />
   <Banner1 />

   </Layout>
   </>
  )
}

export default Home
