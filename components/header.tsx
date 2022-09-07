import React, { useState } from 'react'
import Link from "next/link";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineShopping } from 'react-icons/ai';
import { useRouter } from "next/router";


const style = {
  active: `flex flex-col items-center font-fontMono text-sm items-center text-orange-400 nav-item lg:m-0 m-4`,
  inactive: `flex flex-col items-center font-fontMono text-sm items-center text-white hover:text-orange-400`,
};


export const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      <nav className="sticky top-0 z-20 py-2 md:py-6 dark:bg-black">
        <div className="container px-4 mx-auto lg:max-w-4xl flex flex-wrap items-center justify-between">
          <div className="w-full sticky flex justify-between lg:w-auto lg:static lg:block lg:justify-start lg:h-auto h-[10vh] items-center">
          {/* <Link href="/"> */}
          <div className='lg:hidden text-3xl text-white px-3 py-2 flex items-center'>
              <AiOutlineShopping />
</div>
                        <a className="font-medium tracking-wider transition-colors text-white hover:animate-spin">
                            {/* <img className="w-[3rem]" src='/logo.png' alt="anthony's logo" /> */}
                            audioStore
                        </a>
                    {/* </Link> */}
                    
                    <div className="flex items-center">
                    <div className="lg:hidden">
          </div>
            <button
              className="text-white bg-orange-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded-full h-[3rem] bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <AiOutlineClose /> : <FaBars />}
                
            </button>
            </div>

          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:h-auto h-screen justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            // id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ml-[25%] lg:transform-none translate-y-[-50%] translate-x-[-50%]">
              <li className={
                      router.pathname === "/"
                        ? style.active
                        : style.inactive
                    } onClick={() => setNavbarOpen(false)}>
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
                    } onClick={() => setNavbarOpen(false)}>
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
                    } onClick={() => setNavbarOpen(false)}>
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
                    } onClick={() => setNavbarOpen(false)}>
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
          <div className="hidden lg:block">
          </div>

          <div className='lg:block hidden text-3xl text-white px-3 py-2 flex items-center'>
              <AiOutlineShopping />
</div>
        </div>
      </nav>
    </>
  )
}
