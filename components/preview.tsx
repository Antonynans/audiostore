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
    <div className={`xl:w-4/5 w-11/12 container mx-auto lg:flex lg:gap-32 gap-8 mb-12 ${reverse && 'flex-row-reverse'}`}>
      <div className='flex rounded-md overflow-hidden lg:w-1/2 lg:h-[28.2rem]'>
        <Image
          src={product.categoryImage.tablet}
          alt={product.name}
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className='flex lg:w-1/2 text-center lg:text-left flex-col items-center lg:items-start justify-center lg:mt-0 mt-12 gap-8 '>
        {product.new && <p className='font-bold uppercase leading-3'>new product</p>}
        <h2 className=''>{product.name}</h2>
        <p className=''>{product.description}</p>
        <button className='uppercase rounded-sm text-white bg-orange-500 px-12 py-4' onClick={() => router.push(`/product/${product.slug}`)}>
          see product
        </button>
      </div>
    </div>
  )
}
