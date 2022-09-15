// import { products } from '../../data/index'
import { ICartItem } from '../../models/cart'
import Image from 'next/image'
import React from 'react'
// import css from './styles.module.css'
// import { Quantity } from '../components/index'
import { motion } from 'framer-motion'
// import NumberFormat from 'react-number-format'
import Link from 'next/link'
import { products } from '../../data'
import { Quantity } from '../quantity'

interface IProps {
  item: ICartItem
}

export const CartItem: React.FC<IProps> = ({ item }) => {
  const product = products.find(product => product.id === item.id)

  if (!product) {
    return null
  }

  return (
    <motion.li layout>
      <div className='flex gap-4 items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='w-16 h-16 rounded-sm overflow-hidden'>
            <Image
              src={product.image.mobile}
              alt={product.name}
              placeholder="blur"
              objectFit="cover"
            />
          </div>
          <div className='text-sm'>
            <Link href={`/product/${product.slug}`}>
              <a className='font-black hover:text-orange-500'>{product.shortName}</a>
            </Link>
            <p className='{css.price}'>
              {/* <NumberFormat
                value={product.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$ '}
              /> */}
              ${product.price}
            </p>
          </div>
        </div>
        <Quantity product={product} transparent maxwidth={100} />
      </div>
    </motion.li>
  )
}
