import React from 'react'
import { NextSeo } from 'next-seo'


interface IProps {
  title?: string
  desc?: string
}

export const SEO: React.FC<IProps> = () => {
  return (
    <NextSeo
      title='online store'
      description='ecommerce store'
      additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      openGraph={{
        url: `https://eccomrce2.netlify.app`,
        // title: title,
        // description: desc,
        locale: 'en_us',
        images: [
          {
            url: 'https://res.cloudinary.com/dakts9ect/image/upload/v1657600692/sideprojects/Untitled-1_ym5obf.jpg',
            width: 1200,
            height: 630,
            alt: '',
            type: 'image/jpeg',
          },
        ],
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
