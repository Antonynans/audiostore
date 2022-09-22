import React from 'react'
import image_best_gear from '../assets/shared/tablet/image-best-gear.jpg';
import Image from 'next/image'

export const Gear: React.FC = () => {
  
  return (
    <div className='xl:w-2/3 w-11/12 container mx-auto lg:flex flex-row-reverse items-center gap-12 mb-40'>
      <div className='h-[300px] lg:h-[500px] md:h-auto lg:w-1/2 rounded-md overflow-hidden flex'>
        <Image
          src={image_best_gear}
          alt="best gear"
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className='flex flex-col gap-12 text-center lg:text-left lg:w-1/2 lg:items-start items-center mt-12'>
        <h2 className='uppercase text-[1.75rem] md:text-4xl max-w-[36rem]'>
          Bringing you the <span className='text-orange-500'>best</span> audio gear
        </h2>
        <p className='max-w-[36rem] leading-6 text-[0.93rem] text-[#6d6d6d]'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  )
}
