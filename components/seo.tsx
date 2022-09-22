import React from 'react'
import { NextSeo } from 'next-seo'


interface IProps {
  title?: string
  desc?: string
}



export const SEO: React.FC<IProps> = ({ title = '', desc = '' }) => {
const DEFAULT_DESC_META_TAG =
  'Browse and purchase the best audio devices on the market'

  return (
    <NextSeo
    title={(title)}
    description={desc ? desc : DEFAULT_DESC_META_TAG}
      additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      openGraph={{
        url: `https://theaudiostore.netlify.app`,
        title: title,
        description: desc,
        locale: 'en_us',
        site_name: 'AudioStore',
      }}
      twitter={{
        handle: '@iiamtoni',
        site: '@iiamtoni',
        cardType: 'summary_large_image',
      }}
    />
  )
}
