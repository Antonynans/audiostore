import React from 'react'
import yx1_image from '../assets/tablet/image-earphones-yx1.jpg';
import Image from 'next/image'


export const Banner3: React.FC = () => {
  return (
    <div className='lg:w-4/5 w-11/12 container mx-auto  flex flex-col gap-6 lg:flex-row my-8'>
      <div className='h-[200px] lg:h-[320px] lg:w-1/2 rounded-md overflow-hidden flex'>
        <Image
          src={yx1_image}
          alt="earphones yx1"
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className='rounded-md bg-[#f1f1f1] lg:w-1/2 p-16 flex flex-col items-start justify-center'>
        <h2 className=''>yx1 earphones</h2>
        <button className='px-16 py-4 mt-8 rounded-sm border-2 border-black'>
          see product
        </button>
      </div>
    </div>
  )
}
