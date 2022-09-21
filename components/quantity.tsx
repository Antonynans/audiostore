import { ICartItem } from '../models/cart'
import { IProduct } from '../models/product'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context'
import { useIsMounted } from '../hooks/useIsMounted'
import { framer_count } from './cart/framer'

interface IProps {
  maxwidth?: number | string
  product: IProduct | any
  transparent?: boolean
}

export const Quantity: React.FC<IProps> = ({
  maxwidth = 'auto',
  product,
  transparent,
}) => {
  const { cart, increase, decrease } = useCart()
  const isMounted = useIsMounted()
  const itemExists: ICartItem = cart?.find(
    (item: ICartItem) => item.id === product.id,
  )
  const count = itemExists ? itemExists.quantity : 0

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={`bg-[#f1f1f1] w-full flex items-center gap-8 justify-center;
      ${transparent && 'gap-[1rem] flex bg-transparent justify-end p-0 max-w-[auto]'}`}
      style={{ maxWidth: maxwidth ? maxwidth : 'auto' }}
    >
      <button
        className='text-2xl transition-opacity disabled:text-[#acacac]'
        onClick={() => decrease(product.id)}
        disabled={count === 0}
      >
        -
      </button>
      <AnimatePresence initial={false} mode='wait'>
        <motion.span key={count} className='font-bold min-w-[1rem] flex justify-center items-center' {...framer_count}>
          {count}
        </motion.span>
      </AnimatePresence>
      <button
        className='disabled:text-[#acacac]'
        onClick={() => increase(product.id)}
        disabled={count >= 3}
      >
        +
      </button>
    </div>
  )
}
