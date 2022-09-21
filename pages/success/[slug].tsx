// import React from 'react';
import type { NextPage } from 'next'
import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useCart } from '../../context';
import { useEffect } from 'react';
import { runFireworks } from '../../lib/utils';

const Success: NextPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    localStorage.clear();
    clearCart();
    runFireworks();
   
  }, []);

  return (
   <>
<SEO
        title='AudioStore | Success page'
        desc=''
      />
      <Layout>
      <div className="bg-white min-h-[40vh]">
      <div className="lg:w-[1000px] m-auto mt-40 bg-[#cdcdc] p-12 rounded-[15px] flex flex-col items-center justify-center">
        <p className="bg-green-600 text-4xl">
          <BsBagCheckFill />
        </p>
        <h2 className='capitalize mt-[15px 0] text-4xl text-[#324d67] text-center mt-8 mb-4 font-black'>Thank you for your order!</h2>
        <p className="text-center font-semibold">Check your email inbox for the receipt.</p>
        <p className="font-semibold text-center m-[10px] mt-[30px] ">
          If you have any questions, please email{" "} 
          <a className="ml-[5px] text-[#f02d34]" href="mailto:antonynans@gmail.com">
          antonynans@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="bg-[#f02d34] px-[12px] py-[10px] rounded-[15px] text-[20px] mt-[40px]  uppercase hoverBtn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
       </Layout>
   </>
  )
}

export default Success;