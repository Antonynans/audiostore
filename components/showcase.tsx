import React, { useState } from 'react'
import Image from 'next/image'
import { ICartItem } from '../models/cart'
import { IProduct } from '../models/product'
import { useCart } from '../context'
import { Quantity } from './quantity'
import { Sidebar } from './cart'
import { AnimatePresence } from 'framer-motion'

interface IProps {
  product: IProduct
}

export const Showcase: React.FC<IProps> = ({ product }) => {
  const { name, description, image, new: newProduct, id } = product
  const { increase, cart } = useCart()
  const itemExists: ICartItem = cart?.find(
    (item: ICartItem) => item.id === product.id,
  )
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(prev => !prev)
  const closeSidebar = () => setOpen(false)


  const handleBuyNow = () => {
    toggleOpen();
    increase(id)
  }

  return (
    <div className='xl:w-4/5 w-11/12 container mx-auto lg:flex gap-12 items-center lg:gap-16'>
      <div className='rounded-md overflow-hidden lg:h-[35rem] md:max-w-[21rem] lg:flex lg:max-w-[50%] h-auto'>
        <Image
          src={image.desktop}
          alt={name}
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className='flex gap-12 flex-col lg:mt-0 mt-12'>
        {newProduct && <p className='font-bold uppercase leading-3 text-orange-500 tracking-[0.6rem] text-sm'>new product</p>}
        <h1 className='flex md:text-3xl text-[1.75rem] flex-col font-bold max-w-[25.7rem]'>{name}</h1>
        <p className='font-medium text-base text-[#6d6d6d] leading-6'>{description}</p>
        <div className='flex gap-8 md:flex-row flex-col items-center'>
        <div className='bg-[#f1f1f1] w-full flex items-center px-8 py-3 gap-8 max-w-[10rem]'>
          <Quantity
            product={product}
            key={product.name}
            transparent={false}
          />
         
          
        </div>
        <button className='uppercase rounded-sm text-white bg-orange-500 px-12 py-4 disabled:opacity-50 hoverBtn disabled:transition-none disabled:transform-none'
            onClick={handleBuyNow}
            disabled={itemExists?.quantity >= 3 && true}
          
          >
            add to cart
          </button>
          <AnimatePresence mode="wait" initial={false}>
        {open && <Sidebar fn={closeSidebar} />}
  </AnimatePresence>
          </div>
      </div>
    </div>
  )
}
