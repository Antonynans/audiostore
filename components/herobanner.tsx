import Image from 'next/image';
import image_headset from '../assets/home/desktop/image-headset.png';


const HeroBanner: React.FC = () => {
  return (
   <>
   <main className='bg-black'>
<div className="xl:w-4/5 w-11/12 container mx-auto  flex lg:flex-row flex-col justify-center items-center">
  <div className='text-white'>
<p className=''>New product</p>
<p>Bose 700 Headphones</p>
<p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
<button>See Product</button>
</div>
<Image src={image_headset} width={700} height={700} placeholder="blur" alt='' />
</div>
</main>
   </>
  )
}

export default HeroBanner
