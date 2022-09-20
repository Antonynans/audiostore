import { useRef } from "react";
import { useOnClickOutside } from 'usehooks-ts'
import { motion } from 'framer-motion';
import { framer_background, framer_cart } from './framer'
import { useCart } from "../../context";
import { BiShoppingBag } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'
import { ICartItem } from '../../models/cart';
import { CartItem } from "./cart_items";
import { CartCheckout } from "../cartCheckout";
import { products } from "../../data";


interface IProps {
  fn: any
}

export const Sidebar: React.FC<IProps> = ({ fn }) => {
  const ref = useRef(null)
  useOnClickOutside(ref, fn)
  const { cart } = useCart()
  const cartExists = !cart || cart.length === 0

  return (
    <>
      <BlurredBackground />
      <motion.div className='fixed right-0 bottom-0 w-full h-full max-w-md text-black flex flex-col justify-between overflow-y-scroll bg-[#f1f1f1]' {...framer_cart} ref={ref}>
        <Header fn={fn} />
        {cartExists ? <EmptyCart /> : <RenderCart />}
        <CartCheckout />
      </motion.div>
    </>
  )
}

const BlurredBackground: React.FC = () => {
  return (
    <motion.div className='fixed top-0 bottom-0 right-0 left-0 bg-[#000000b3] blur-sm' {...framer_background}></motion.div>
  )
}

const Header: React.FC<IProps> = ({ fn }) => {
  return (
    <div className='flex justify-between items-center p-6 shadow-md bg-[#fafafa]'>
      <h3 className="uppercase ">cart</h3>
      <button onClick={fn} className='flex text-2xl'>
        <VscChromeClose />
      </button>
    </div>
  )
}

const RenderCart: React.FC = () => {
  const { cart } = useCart()

  const details = cart.map((item: ICartItem) => (
    products.find(product => product.id === item.id)
  ))
// const line_list = products.find(item => item.id == details)
console.log('carfs',  details)

  return (
    <motion.ul className='flex flex-col gap-8 p-6' layout>
      {cart.map((item: ICartItem) => (
        <CartItem item={item} key={item.id} />
      ))}
    </motion.ul>
  )
}

const EmptyCart: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center '>
      <BiShoppingBag className="text-5xl" />
      <p className="uppercase text-center font-bold">your cart is empty</p>
    </div>
  )
}

 