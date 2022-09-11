import React from 'react'
import { useRouter } from 'next/router'
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si'
import Link from 'next/link'

const style = {
  active: `flex flex-col items-center font-fontMono text-sm items-center text-orange-400 nav-item lg:m-0 m-4`,
  inactive: `flex flex-col items-center font-fontMono text-sm items-center text-white hover:text-orange-400`,
};

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  const router = useRouter()

  return (
    <div className=" bg-black text-white">
      <div className='xl:w-4/5 w-11/12 container mx-auto'>
      <div className='flex items-center pt-12'>
        <p>audiStore</p>
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ml-[25%] lg:transform-none translate-y-[-50%] translate-x-[-50%]">
              <li className={
                      router.pathname === "/"
                        ? style.active
                        : style.inactive
                    } >
                      <Link href="/">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug "
                  
                >
                  Home
                </a>
                </Link>
              </li>
              <li className={
                      router.pathname.startsWith("/headphones")
                      ? style.active
                      : style.inactive
                    } >
                      <Link href="/headphones">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug"
                  
                >
                 HEADPHONES
                </a>
                </Link>
              </li>
              <li className={
                      router.pathname.startsWith("/speakers")
                      ? style.active
                      : style.inactive
                    } >
                      <Link href="/speakers">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug "
                  
                >
                  SPEAKERS
                </a>
                </Link>
              </li>
              <li className={
                      router.pathname.startsWith("/watches")
                      ? style.active
                      : style.inactive
                    } >
                      <Link href="/watches">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug "
                  
                >
                  WATCHES
                </a>
                </Link>
              </li>
             
            </ul>
      </div>
      <p className=''>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className='flex items-center justify-between'>
          <p className=''>Copyright {year}. All Rights Reserved</p>
          <ul className='flex'>
            {socials.map(soc => {
              return (
                <li key={soc.title}>
                  <a
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    title={soc.title}
                  >
                    {soc.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        </div>
    </div>
  )
}


const socials = [
  {
    title: 'facebook',
    href: 'https://www.facebook.com/',
    icon: <SiFacebook />,
  },
  {
    title: 'twitter',
    href: 'https://twitter.com/iiamantoni',
    icon: <SiTwitter />,
  },
  {
    title: 'instagram',
    href: 'https://www.instagram.com/',
    icon: <SiInstagram />,
  },
]
