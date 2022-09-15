import React from 'react'
import Image from 'next/image'
import { ICartItem } from '../models/cart'
import { IProduct } from '../models/product'
import { useCart } from '../context'
import { Quantity } from './quantity'

interface IProps {
  product: IProduct
}

export const Showcase: React.FC<IProps> = ({ product }) => {
  const { name, description, image, new: newProduct, id } = product
  const { increase, cart, decrease } = useCart()
  const itemExists: ICartItem = cart?.find(
    (item: ICartItem) => item.id === product.id,
  )

  
  const count = itemExists ? itemExists.quantity : 0


  return (
    <div className='xl:w-4/5 w-11/12 container mx-auto lg:flex gap-12 items-center lg:gap-16'>
      <div className='rounded-md overflow-hidden md:h-80 md:w-[21rem] lg:flex lg:w-1/2 h-[35rem]'>
        <Image
          src={image.desktop}
          alt={name}
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className='flex gap-12 flex-col lg:w-1/2'>
        {newProduct && <p className='font-bold uppercase leading-3'>new product</p>}
        <h1 className=''>{name}</h1>
        <p className=''>{description}</p>
        <div className='flex gap-8'>
        <div className='bg-[#f1f1f1] w-full flex items-center px-8 py-3 gap-8 max-w-[10rem]'>
          <Quantity
            product={product}
            key={product.name}
            transparent={false}
          />
          {/* <button className='text-2xl transition-opacity disabled:text-[#acacac]'
        onClick={() => decrease(product.id)}
        disabled={count === 0}
      >
        -
      </button>
     <p className='font-bold min-w-[1rem] flex justify-center items-center'>
          {count}
       </p>
      <button className='disabled:text-[#acacac]'
        onClick={() => increase(product.id)}
        disabled={count >= 3}
      >
        +
      </button> */}
          
        </div>
        <button className='uppercase rounded-sm text-white bg-orange-500 px-12 py-4 disabled:opacity-50'
            onClick={() => increase(id)}
            disabled={itemExists?.quantity >= 3 && true}
          
          >
            add to cart
          </button>
          </div>
      </div>
    </div>
  )
}
