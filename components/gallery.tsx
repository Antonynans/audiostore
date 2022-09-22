import { IGallery } from '../models/gallery'
import React from 'react'
import { Thumbnail } from './thumbnail'

interface IProps {
  gallery: IGallery
}

export const Gallery: React.FC<IProps> = ({ gallery }) => {
  return (
    <div className='xl:w-2/3 w-11/12 container mx-auto flex my-40 flex-col md:flex-row md:justify-center gap-4'>
      <div className='flex flex-col md:justify-between gap-4'>
        <Thumbnail thumbnail={gallery.first.mobile} id="one" />
        <Thumbnail thumbnail={gallery.second.mobile} id="two" />
      </div>
      <Thumbnail thumbnail={gallery.third.desktop} id="three" />
    </div>
  )
}
