import React, { useRef, useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { ShowCart } from './cart/showCart';
import { useOnClickOutside } from 'usehooks-ts'
import { AnimatePresence, motion } from 'framer-motion'
import { framer_menu } from './cart/framer';
import { routes } from '../utils/routes';
import { Squash } from 'hamburger-react'


const style = {
  active: ` text-orange-500 `,
};


export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const router = useRouter()

  useOnClickOutside(ref, () => setOpen(false))


  return (
    <>
    <div className='sticky top-0 z-[999]'>
    <div className='bg-black w-full'>
    <nav className='flex justify-between text-white items-center bg-inherit xl:w-2/3 w-11/12 container mx-auto py-4'>
    <div ref={ref} className='lg:hidden'>
      <div className='rounded-sm shadow-2xs'>
        <Squash
          size={25}
          toggled={open}
          toggle={setOpen}
          hideOutline={false}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul className='px-[5%] m-auto fixed bg-black flex flex-col lg:flex-row lg:justify-between gap-4 top-16 left-0 right-0 z-[-1] border-b-2 border-[#242424] pt-12' {...framer_menu}>
            {routes.map(route => {
              const { Icon, slug, title } = route

              const isCurrent = router.query.slug === title
              const isCategory = router.query.slug?.includes(title)
              const isSubCategory = router.query.slug?.includes(
                title.substring(0, title.length - 1),
              )
              return (
                <li key={route.title} className='hover:text-orange-500 last:mb-8'>
                  <Link href={slug}>
                    <a
                    className={`uppercase flex items-center justify-between max-w-full p-3 border-[#242424] border-2 rounded-md font-bold
                    ${router.pathname === '/' && slug === '/' && style.active} ${isCurrent && style.active} ${isCategory && style.active} ${isSubCategory && style.active}`}                     
                      onClick={() => setOpen(false)}
                    >
                      {title}
                      <Icon className={'css.icon'} />
                    </a>
                  </Link>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
    <p className='text-white text-2xl font-semibold tracking-[0.06rem]'>audiostore</p>
    <div className='flex items-center gap-8'>
    <ul className='uppercase gap-9 lg:flex hidden font-bold'>
      {routes.map(route => {
        const { title, slug } = route

        const isCurrent = router.query.slug === title
        const isCategory = router.query.slug?.includes(title)
        const isSubCategory = router.query.slug?.includes(
          title.substring(0, title.length - 1),
        )

        return (
          <li key={title} className='hover:text-orange-500'>
            <Link href={slug}>
              <a
                 className={`text-sm;
                 ${router.pathname === '/' && slug === '/' && style.active} ${isCurrent && style.active} ${isCategory && style.active} ${isSubCategory && style.active}`}
                
              >
                {title}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
    <ShowCart />
    </div>
    </nav>
    </div>
    </div>
    </>
  )
}
