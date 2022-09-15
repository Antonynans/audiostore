import React from 'react'
import Link from 'next/link'
import { TiShoppingCart } from 'react-icons/ti'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context'
import { ICartItem } from '../models/cart'
import { products } from '../data'
import { framer_money } from './cart/framer'

export const CartCheckout: React.FC = () => {
  const { cart } = useCart();

  const prices = cart?.map((cartItem: ICartItem) => {
    const { id, quantity } = cartItem
    const product: any = products.find(product => product.id === id)
    return product?.price * quantity
  })

  const price = prices?.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
    0,
  )

  return (
    <div className='p-6 bg-[#fafafa] shadow-sm'>
      <p className='flex justify-between mb-4'>
        <span className='uppercase text-[#6d6d6]'>total</span>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.span key={price} className='font-black' {...framer_money}>
            {/* <NumberFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$ '}
            /> */}
            ${price}
          </motion.span>
        </AnimatePresence>
      </p>
      <CheckoutLink />
    </div>
  )
}

const CheckoutLink: React.FC = () => {
  const { cart } = useCart()
  const emptyCart = !cart || cart.length < 1

  return (
    <Link href="/checkout">
      <a className={`flex justify-center items-center p-6 gap-2 uppercase font-bold text-white bg-orange-500 hoverBtn ${emptyCart && "pointer-events-none opacity-50"}`}>
        <TiShoppingCart />
        checkout
      </a>
    </Link>
  )
}
