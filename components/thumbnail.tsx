import React from 'react'
import Image from 'next/image'

interface IProps {
  thumbnail: string
  id: string
}

export const Thumbnail: React.FC<IProps> = ({ thumbnail }) => {
  return (
    <div className='flex overflow-hidden rounded-md'>
      <Image
        src={thumbnail}
        alt="product"
        placeholder="blur"
        objectFit="cover"
      />
    </div>
  )
}
