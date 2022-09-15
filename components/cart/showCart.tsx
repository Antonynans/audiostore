import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCart } from '../../context'
import { Sidebar } from '.'
import { ICartItem } from '../../models/cart'
import { framer_count } from './framer'
import { AnimatePresence, motion } from 'framer-motion'

export const ShowCart: React.FC = () => {
  const { cart } = useCart()
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(prev => !prev)
  const closeSidebar = () => setOpen(false)


  const q = cart?.map((item: ICartItem) => item.quantity)
  const count = q?.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
    0,
  )

  return (
    <>
      <button className='text-white text-3xl flex shadow-2xs p-3 rounded-sm relative' onClick={toggleOpen}>
        <AiOutlineShoppingCart />
        <AnimatePresence initial={false} mode="wait">
      {count > 0 && (
        <motion.div key="count" className="absolute text-black -bottom-2 -left-2 bg-orange-500 rounded-full text-sm w-6 h-6 flex items-center justify-center" {...framer_count}>
          <AnimatePresence initial={false} mode="wait">
            <motion.span {...framer_count} key={count}>
              {count}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
       
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && <Sidebar fn={closeSidebar} />}
      </AnimatePresence>
    </>
  )
}
