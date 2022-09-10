import { IGallery } from '../models/gallery'
import React from 'react'
import { Thumbnail } from './thumbnail'

interface IProps {
  gallery: IGallery
}

export const Gallery: React.FC<IProps> = ({ gallery }) => {
  return (
    <div className=''>
      <div className=''>
        <Thumbnail thumbnail={gallery.first.mobile} id="one" />
        <Thumbnail thumbnail={gallery.second.mobile} id="two" />
      </div>
      <Thumbnail thumbnail={gallery.third.desktop} id="three" />
    </div>
  )
}
