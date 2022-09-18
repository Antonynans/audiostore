import Image from 'next/image';
// import image_headset from '../assets/home/desktop/image-headset.png';
import { useRouter } from 'next/router';
import { home_desktop_images } from '../assets/index'



const HeroBanner: React.FC = () => {
  const router = useRouter();
  return (
   <>
   <main className='heroBg bg-gradient-to-b from-[#000000] to-[#0000004d] min-h-[calc(100vh-77px)] bg-no-repeat bg-contain bg-bottom z-10 mb-40 bg-black
   lg_bg lg:bg-none lg:min-h-[632px] lg:h-[632px] lg:relative w-full'>
    <div className='hidden lg:block absolute bg-white -z-[1] w-full h-24 -bottom-8 left-0 right-0 heroTransform'></div>
<div className="xl:w-4/5 w-11/12 container mx-auto flex lg:flex-row flex-col justify-between items-center">
  <div className='text-white min-h-[calc(100vh-130px)] lg:min-h-full flex flex-col justify-center gap-8 items-center text-center lg:text-left lg:items-start'>
<p className='font-bold text-[#6d6d6d] text-sm tracking-[0.65rem]'>New product</p>
<p className='flex flex-col text-5xl leading-[3.5rem] max-w-[22rem]'>XX99 Mark II Headphones</p>
<p className='text-[#6d6d6d] leading-6 max-w-[22rem]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
<button className='px-8 py-4 bg-orange-500 uppercase rounded-sm hoverBtn' onClick={() => router.push("/product/xx99-mark-two-headphones")}>See Product</button>
</div>
<div className='hidden lg:block max-w-[30rem] mt-8'>
<Image src={home_desktop_images.image_headset} alt="headset"  placeholder="blur" />
</div>
</div>
</main>
   </>
  )
}

export default HeroBanner
