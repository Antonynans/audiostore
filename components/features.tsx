import React from 'react'

interface IProps {
  text: string
}

export const Features: React.FC<IProps> = ({ text }) => {
  return (
    <div className='xl:w-4/5 w-11/12 container mx-auto my-40'>
      <h2 className='mb-8 lg:text-2xl text-[1.75rem] uppercase'>Features</h2>
      <p className='whitespace-pre-line leading-6 text-base text-[#6d6d6d]'>{text}</p>
    </div>
  )
}