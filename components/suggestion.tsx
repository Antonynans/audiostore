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
    <li className=''>
      <div className=''>
        <Image
          src={suggestion.image.desktop}
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <h3 className=''>{suggestion.name}</h3>
      <button onClick={() => router.push(`/product/${suggestion.slug}`)}>
        see product
      </button>
    </li>
  )
}
