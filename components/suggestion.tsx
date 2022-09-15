import React from 'react'
import { ISuggestion } from '../models/suggestion'
import Image from 'next/image'
import { useRouter } from 'next/router'
// import { useWindowSize } from '@hooks/useWindowSize'

interface IProps {
  suggestion: ISuggestion
}

export const Suggestion: React.FC<IProps> = ({ suggestion }) => {
  // const { isTouch } = useWindowSize()
  const router = useRouter();

  return (
    <li className='flex flex-col items-center gap-8'>
      <div className='overflow-hidden rounded-sm flex min-h-40 md:h-80'>
        <Image
          src={suggestion.image.desktop}
          objectFit="cover"
          // placeholder="blur"
        />
      </div>
      <h3 className='uppercase font-black'>{suggestion.name}</h3>
      <button className='p-4 w-full max-w-[160px] mt-8 rounded-sm border-2 bg-orange-500 uppercase text-white hoverBtn' onClick={() => router.push(`/product/${suggestion.slug}`)}>
        see product
      </button>
    </li>
  )
}
