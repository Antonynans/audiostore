import React from 'react'
import Image from 'next/image'
import { ICartItem } from '../models/cart'
import { IProduct } from '../models/product'

interface IProps {
  product: IProduct
}

export const Showcase: React.FC<IProps> = ({ product }) => {
  const { name, description, image, new: newProduct, id } = product
  // const { increase, cart } = useCart()
  // const itemExists: ICartItem = cart?.find(
  //   (item: ICartItem) => item.id === product.id,
  // )

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
        <div className='{css.cta}'>
          {/* <Quantity
            maxwidth={170}
            product={product}
            key={product.name}
            transparent={false}
          />
          <Button
            onClick={() => increase(id)}
            disabled={itemExists?.quantity >= 3 && true}
            maxwidth={170}
          >
            add to cart
          </Button> */}
        </div>
      </div>
    </div>
  )
}
