import Image from 'next/image'
import React from 'react'
import { IProduct } from '../models/product';
import { useRouter } from 'next/router';


interface IProps {
  product: IProduct
  reverse?: boolean
}

export const Preview: React.FC<IProps> = ({ product, reverse }) => {
  const router = useRouter();
  
  return (
    <div className={`xl:w-2/3 w-11/12 container mx-auto lg:flex lg:gap-32 gap-8 mb-12 ${reverse && 'flex-row-reverse'}`}>
      <div className='flex rounded-md overflow-hidden lg:w-1/2 lg:h-[28.2rem]'>
        <Image
          src={product.categoryImage.tablet}
          alt={product.name}
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className='flex lg:w-1/2 text-center lg:text-left flex-col items-center lg:items-start justify-center lg:mt-0 mt-12 gap-8 '>
        {product.new && <p className='font-bold uppercase leading-3 text-orange-500 tracking-[0.6rem] text-sm'>new product</p>}
        <h2 className='flex md:text-3xl text-[1.75rem] flex-col font-bold max-w-[25.7rem]'>{product.name}</h2>
        <p className='font-medium text-base text-[#6d6d6d] leading-6'>{product.description}</p>
        <button className='uppercase rounded-sm text-white bg-orange-500 px-12 py-4 hoverBtn' onClick={() => router.push(`/product/${product.slug}`)}>
          see product
        </button>
      </div>
    </div>
  )
}
