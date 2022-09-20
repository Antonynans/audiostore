import Image from 'next/image';
import zx9_image from '../assets/home/desktop/image-speaker-zx9.png';
import { useRouter } from 'next/router';



const Banner: React.FC = () => {
  const router = useRouter();
  
  return(
    <div className='xl:w-4/5 w-11/12 flex lg:h-[560px] px-5 py-14 lg:justify-end lg:flex-row flex-col relative items-center bg-[#ec5d49] gap-7 text-white container rounded-md overflow-hidden mx-auto bg-[url("/pattern-circles.svg")] bg-no-repeat bg-center bg-cover'>
    <div className='lg:absolute lg:max-w-[26.625rem] lg:left-[7.5rem] md:max-w-[12.3rem] max-w-[172px] -bottom-4'>
    <Image src={zx9_image} alt="ZX9 Speaker" placeholder="blur"/>
    </div>
    <div className='right-24 lg:w-[40%] lg:text-left text-center mt-8 flex flex-col lg:items-start items-center gap-8'>
      <h1 className='flex flex-col text-5xl leading-[3.5rem] uppercase'>
        <span>zx9</span> speaker
      </h1>
      <p className='leading-6 font-semibold max-w-[22rem]'>
        Upgrade to premium speakers that are phenomenally built to deliver
        truly remarkable sound.
      </p>
      <button className='bg-black py-4 px-8 mt-8 rounded-sm hoverBtn' onClick={() => router.push('/product/zx9-speaker')}>
        see product
      </button>
    </div>
  </div>
  )
}

export default Banner;