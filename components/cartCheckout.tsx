import React from 'react'
import Link from 'next/link'
import { TiShoppingCart } from 'react-icons/ti'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context'
import { ICartItem } from '../models/cart'
import { products } from '../data'
import { framer_money } from './cart/framer'
import getStripe from '../lib/getStripe';

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
        <AnimatePresence mode='wait' initial={false}>
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

  const merged = cart?.map(item => {
    return {
      ...item,
      ...products.find(product => product.id === item.id)
    }
  })
 
  
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response: any = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(merged),
    });

    if(response.statusCode === 500) return;

    const data = await response.json();

    // toast.loading('Redirecting...');
    // alert('loading...')

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <button className={`flex w-full justify-center items-center p-6 gap-2 uppercase font-bold text-white bg-orange-500 hoverBtn ${emptyCart && "pointer-events-none opacity-50"}`} onClick={() => handleCheckout()}>
      {/* <a > */}
        <TiShoppingCart />
        checkout
      {/* </a> */}
    </button>
  )
}
