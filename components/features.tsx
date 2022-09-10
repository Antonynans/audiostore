import React from 'react'

interface IProps {
  text: string
}

export const Features: React.FC<IProps> = ({ text }) => {
  return (
    <div className='xl:w-4/5 w-11/12 container mx-auto'>
      <h2 className='{css.title}'>Features</h2>
      <p className='{css.text}'>{text}</p>
    </div>
  )
}