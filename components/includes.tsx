import React from 'react'
import { IIncludes } from '../models/includes'
import { FiPackage } from 'react-icons/fi'

interface IProps {
  includes: IIncludes[]
}

export const Includes: React.FC<IProps> = ({ includes }) => {
  return (
    <div className='xl:w-2/3 w-11/12 container mx-auto lg:flex lg:p-16 shadow-3xl p-8 relative rounded-[2rem]'>
      <div className='absolute -top-8 -right-4 p-4 text-white rounded-full flex justify-center items-center bg-black'>
        <FiPackage className='text-4xl '/>
      </div>
      <h2 className='uppercase mb-8 md:w-1/2 lg:text-2xl text-[1.75rem]'>in the box</h2>
      <ul className='font-semibold flex flex-col gap-4'>
        {includes.map(i => {
          const { quantity, item } = i
          return (
            <li key={item} className='flex flex-wrap'>
              <span className='mr-6 text-orange-500 min-w-[1.2rem] block'>{quantity}x</span>{' '}
              <span className='font-medium text-[#6d6d6d]'>{item}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
