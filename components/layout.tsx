import React from 'react'
import { Footer } from './footer'
import { Header } from './header'
import { SEO } from './seo'
// import { Topbar, Footer, Gear, Categories } from '@components/index'

interface IProps {
  children: React.ReactNode
  hideCategories?: boolean
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
    <SEO />
      <Header />
      <main id="main">
        {children}
      </main>
      <Footer />
    </>
  )
}
