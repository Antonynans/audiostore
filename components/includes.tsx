import React from 'react'
import { IIncludes } from '../models/includes'
import { FiPackage } from 'react-icons/fi'

interface IProps {
  includes: IIncludes[]
}

export const Includes: React.FC<IProps> = ({ includes }) => {
  return (
    <div className='xl:w-4/5 w-11/12 container mx-auto shadow-3xl p-8 relative rounded-[2rem]'>
      <div className='absolute -top-8 -right-4 p-4 text-white rounded-full flex justify-center items-center bg-black'>
        <FiPackage className='text-4xl '/>
      </div>
      <h2 className='uppercase mb-8 md:w-1/2'>in the box</h2>
      <ul className='font-semibold flex  flex-col gap-4'>
        {includes.map(i => {
          const { quantity, item } = i
          return (
            <li key={item} className='{css.item}'>
              <span className=''>{quantity}x</span>{' '}
              <span className='{css.item_name}'>{item}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
