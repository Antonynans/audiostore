/*-------------------------------------------------------------------
|  React FC Preview
|
|  Purpose: RENDERS PRODUCT'S PREVIEW ON THE CATEGORIES PAGES
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import Image from 'next/image'
import React from 'react'
import { IProduct } from '../models/product';


interface IProps {
  product: IProduct
  reverse?: boolean
}

export const Preview: React.FC<IProps> = ({ product, reverse }) => {
  return (
    <div className={`xl:w-4/5 w-11/12 container mx-auto lg:flex lg:gap-32 gap-8 mb-12 ${reverse && 'flex-row-reverse'}`}>
      <div className=''>
        <Image
          src={product.categoryImage.tablet}
          alt={product.name}
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className=''>
        {product.new && <p className=''>new product</p>}
        <h2 className=''>{product.name}</h2>
        <p className=''>{product.description}</p>
        <button className=''>
          see product
        </button>
      </div>
    </div>
  )
}
