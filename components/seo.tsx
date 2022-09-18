import React from 'react'
import { NextSeo } from 'next-seo'


interface IProps {
  title?: string
  desc?: string
}

const DEFAULT_TITLE_META_TAG = 'Homepage'
const DEFAULT_DESC_META_TAG =
  'Browse and purchase the best audio devices on the market'
const RENDER_TITLE_META_TAG = (title?: string) =>
  `AudioStore | ${title ? title : DEFAULT_TITLE_META_TAG}`


export const SEO: React.FC<IProps> = ({ title = '', desc = '' }) => {
  
  return (
    <NextSeo
    title={RENDER_TITLE_META_TAG(title)}
    description={desc ? desc : DEFAULT_DESC_META_TAG}
      additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      openGraph={{
        url: `https://audiostore.netlify.app`,
        title: title,
        description: desc,
        locale: 'en_us',
        // images: [
        //   {
        //     url: 'https://res.cloudinary.com/dakts9ect/image/upload/v1657600692/sideprojects/Untitled-1_ym5obf.jpg',
        //     width: 1200,
        //     height: 630,
        //     alt: '',
        //     type: 'image/jpeg',
        //   },
        // ],
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
