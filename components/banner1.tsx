import Image from 'next/image';
import zx9_image from '../assets/desktop/image-speaker-zx9.png';



const Banner: React.FC = () => {
  return(
    <div className='xl:w-4/5 w-11/12 lg:flex h-[560px] relative items-center bg-[#ec5d49] gap-7 text-white container rounded-md overflow-hidden mx-auto bg-[url("/pattern-circles.svg")] bg-no-repeat bg-center bg-cover'>
    <div className=' -bottom-4 lg:absolute lg:w-[30%] lg:max-w-full max-w-[13rem] mx-auto mt-16 left-32'>
    <Image src={zx9_image} alt="ZX9 Speaker" placeholder="blur"/>
    </div>
    <div className='lg:absolute right-24 lg:w-[40%] lg:text-left text-center mt-8'>
      <h1 className=''>
        <span>zx9</span> speaker
      </h1>
      <p className=''>
        Upgrade to premium speakers that are phenomenally built to deliver
        truly remarkable sound.
      </p>
      <button className='bg-black px-16 py-4 mt-8 rounded-sm'>
        see product
      </button>
    </div>
  </div>
  )
}

export default Banner;