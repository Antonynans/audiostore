import React from 'react'
import yx1_image from '../assets/home/tablet/image-earphones-yx1.jpg';
import Image from 'next/image'
import { useRouter } from 'next/router';


export const Banner3: React.FC = () => {
  const router = useRouter();
  
  return (
    <div className='xl:w-4/5 w-11/12 container mx-auto  flex flex-col gap-6 md:flex-row my-8 mb-40'>
      <div className='h-[200px] md:h-[320px] md:w-1/2 rounded-md overflow-hidden flex'>
        <Image
          src={yx1_image}
          alt="earphones yx1"
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className='rounded-md bg-[#f1f1f1] md:w-1/2 p-16 flex flex-col items-start justify-center'>
        <h2 className=''>yx1 earphones</h2>
        <button className='py-4 px-8 mt-8 rounded-sm border-2 border-black hoverBtn' onClick={() => router.push('/product/yx1-earphones')}>
          see product
        </button>
      </div>
    </div>
  )
}
