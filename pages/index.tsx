import type { NextPage } from 'next'
import Banner1 from '../components/banner1'
import Banner2 from '../components/banner2'
import { Banner3 } from '../components/banner3'
import Categories from '../components/categories'
import HeroBanner from '../components/herobanner'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'


const Home: NextPage = () => {
  return (
   <>
   <SEO title='AudioStore | Homepage' />
   <Layout hideCategories>
   <HeroBanner />
   <Categories />
   <Banner1 />   
   <Banner2 />
   <Banner3 />

   </Layout>
   </>
  )
}

export default Home
