// import { Header } from '../components/header'
import type { NextPage } from 'next'
import Categories from '../components/categories'
import { Layout } from '../components/layout'
import xx99_mark_one from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
// import xx99_mark_two from '../assets/desktop/image-product-xx99-mark-two.jpg';
// import xx55_image from '../assets/desktop/image-product-xx55.jpg';
import Image from 'next/image';



const Headphones: NextPage = () => {
  return (
   <>
   <Layout>
    <p className='bg-black text-white h-52 flex items-center justify-center text-4xl uppercase'>Headphones</p>
    <Image
          src={xx99_mark_one}
          alt="earphones yx1"
          placeholder="blur"
          objectFit="cover"
        />
    <Categories />
   </Layout>

   </>
  )
}

export default Headphones
